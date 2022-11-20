const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    SupID: { type: String, required: true },
    Supname: { type: String, required: true },
    Supitem: { type: String, required: true },
    Amount: { type: String, required: true },
    Date: { type: String, required: true },
    Contactno: { type: String, required: true },
    Email: { type: String, required: true },
}, {
    timestamps: true,
});

const Supplier = mongoose.model("Supplierpay",SupplierSchema);

module.exports = Supplier;