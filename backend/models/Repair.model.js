const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const RepairSchema = new Schema({
    Itemcode: { type: String, required: true },
    Issue: { type: String, required: true },
    Discription: { type: String, required: true },
    Unitprice: { type: Number, required: true },
    Contactno: { type: String, required: true },
    Status: { type: String, required: true },


}, {
    timestamps: true,
});



const Repair = mongoose.model('Repair', RepairSchema);

module.exports = Repair;