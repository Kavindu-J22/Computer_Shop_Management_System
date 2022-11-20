const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const CustomerSchema = new Schema({

    Cid: { type: String, required: true },
    username: { type: String, required: true },
    Address: { type: String, required: true },
    Phone: { type: Number, required: true, maxlength: 10 },
    birthday: { type: String, required: true },
    Email: { type: String, required: true },

}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;