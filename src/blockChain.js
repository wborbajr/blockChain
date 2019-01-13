let hash = require('object-hash');

const TARGET_HASH = hash(1406);

let validator = require("./validator");

let mongoose = require("mongoose");
let blockChainModel = mongoose.model("BlockChain");

let chalk = require("chalk");

class BlockChain {

    constructor() {
        // Create
        this.chain = [];

        // Transaction
        this.curr_transactions = [];

    }
        
    addNewBlock(prevHash) {
        let block = {
            index        : this.chain.length + 1,
            timestamp    : Date.now(),
            transactions : this.curr_transactions,
            prevHash     : prevHash,
        };

        if(validator.proofOfWork() == TARGET_HASH) {

            block.hash = hash(block);

            // Add it to the instance Sace it on the DB console Success
            let newBlock = new blockChainModel(block);
            newBlock.save((err) => {
                if(err) return console.log(chalk.red("Cannot save Block to DB", err));
                console.log(chalk.green("Block saved on the Database"));
            });

            // Add to chain
            this
                .chain
                .push(block);
            this.curr_transactions = [];

            return block;
        }

    }

    addNewTransaction(sender, receipient, amount) {
        this.curr_transactions.push({ sender, receipient, amount })
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }

}

module.exports = BlockChain;