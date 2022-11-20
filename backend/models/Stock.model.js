const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const StockSchema = new Schema({
    Itemcode: { type: String, required: true },
    Productname: { type: String, required: true },
    Discription: { type: String, required: true },
    Unitprice: { type: Number, required: true },
    qty: { type: Number, required: true },


}, {
    timestamps: true,
});



const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;