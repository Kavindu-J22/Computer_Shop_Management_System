const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
    EXID: { type: String, required: true },
    EXname: { type: String, required: true },
    Amount: { type: String, required: true },
    Date: { type: String, required: true },
    Contactno: { type: String, required: true },
    Discription: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Exchange = mongoose.model("Exchange",ExchangeSchema);

module.exports = Exchange;