let hash = require('object-hash');

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

        // Put hash
        this.hash = hash(block);

        // Add to chain
        this.chain.push(block);
        this.curr_transactions = [];

        return block;

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