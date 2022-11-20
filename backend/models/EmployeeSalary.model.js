const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const EmployeeSalarySchema = new Schema({
    Eid: { type: String, required: true, },
    Username: { type: String, required: true },
    Phone: { type: Number, required: true },
    Discription: { type: String, required: true },
    Payment: { type: Number, required: true },
    Date: { type: String, required: true },
    Email: { type: String, required: true },

}, {
    timestamps: true,
});

const EmployeeSalary = mongoose.model('EmployeeSalary', EmployeeSalarySchema);

module.exports = EmployeeSalary;