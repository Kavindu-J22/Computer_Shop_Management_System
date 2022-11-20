const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const EmployeeSchema = new Schema({
    Eid: { type: Number, required: true, },
    username: { type: String, required: true },
    Address: { type: String, required: true },
    Phone: { type: String, required: true },
    birthday: { type: String, required: true },
    Position: { type: String, required: true },
    Gender: { type: String, required: true },
    Email: { type: String, required: true },

}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;