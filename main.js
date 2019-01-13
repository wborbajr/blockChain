let database = require("./src/database");

database.onConnect(() => {

    let BlockChain = require("./src/blockChain");

    let blockChain = new BlockChain();

    let hash = require('object-hash');

    let PROOF = 1406;

    /*
    if(proofOfWork() == PROOF) {
        blockChain.addNewTransaction("islem", "borba", 2000);
        let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
        blockChain.addNewBlock(prevHash);
    }
    */   

    blockChain.addNewTransaction("kiko", "zinho branco", 2000);
    blockChain.addNewBlock(null);

    console.log( "Chain : ", blockChain.chain);

});