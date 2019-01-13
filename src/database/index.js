let mongoose = require("mongoose");

let BlockChainModel = require("./model");

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/blockChain", (err) => {
    if(err) return console.log("Cannot connect to Database");
    console.log("Database os Connected");
    connectionCallBack();
});

let connectionCallBack = () => {};

module.exports.onConnect = (callback) => {
    connectionCallBack = callback;
}