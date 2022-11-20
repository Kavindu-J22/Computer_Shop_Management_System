const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully");
})

const EmployeeRouter = require('./routes/Employee');
const DeliveryRouter = require("./routes/Delivery");
const SupplierRouter = require("./routes/Supplier");
const StockRouter = require('./routes/Stock');
const CustomerRouter = require('./routes/Customer');
const ExchangeRouter = require('./routes/Exchange');
const RepairRouter = require('./routes/Repair');
const EmployeeSalaryRouter = require('./routes/EmployeeSalary');

app.use('/Employee', EmployeeRouter);
app.use("/Delivery", DeliveryRouter);
app.use("/Supplier", SupplierRouter);
app.use('/Stock', StockRouter);
app.use('/Customer', CustomerRouter);
app.use('/Exchange', ExchangeRouter);
app.use('/Repair', RepairRouter);
app.use('/EmployeeSalary', EmployeeSalaryRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});