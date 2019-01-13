let BlockChain = require("./blockchain/blockChain");

let blockChain = new BlockChain();

let hash = require('object-hash');

let PROOF = 1406;

let validProof = (proof) => {
    let guessHash = hash(proof);

    console.log( "Hashing: ", guessHash);

    return guessHash == hash(PROOF);
};

let proofOfWork = () => {
    let proof = 0;

    while(true) {
        if(!validProof(proof)) {
            proof++
        } else {
            break;
        }
    }

    return proof;
}

if(proofOfWork() == PROOF) {
    blockChain.addNewTransaction("islem", "borba", 2000);
    let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock(prevHash);
}

console.log( "Chain : ", blockChain.chain);