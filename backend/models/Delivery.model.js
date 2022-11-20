const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    DPID: { type: String, required: true },
    DPname: { type: String, required: true },
    DPPlace: { type: String, required: true },
    DPItem: { type: String, required: true },
    Amount: { type: String, required: true },
    Date: { type: String, required: true },
    Contactno: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Delivery = mongoose.model("Delivery",DeliverySchema);

module.exports = Delivery;