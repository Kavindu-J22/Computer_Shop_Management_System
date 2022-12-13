import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import home from "./components/Home.component"

//employee
import EditEmployee from "./components/Employee/edit-Employee.components";
import CreateEmployee from "./components/Employee/create-Employee.component";
import EmployeeList from "./components/Employee/Employee-list.component";
import Employeereport from "./components/Employee/Report";

//Stock

import EditStock from "./components/Stock/edit-Stock.component";
import CreateStock from "./components/Stock/create-Stock.component";
import StockList from "./components/Stock/Stock-list.component";
import Stockreport from "./components/Stock/Report";


//Seller

import EditSupplier from "./components/Supplier/Supplier-Update.component";
import CreateSupplier from "./components/Supplier/Supplier-Create.component";
import SupplierList from "./components/Supplier/Supplier-list.component";
import Supplierreport from "./components/Supplier/Report";

//Delivery

import EditDelivery from "./components/Delivery/Delivery-Update.component";
import CreateDelivery from "./components/Delivery/Delivery-Create.component";
import DeliveryList from "./components/Delivery/Delivery-list.component";
import Deliveryreport from "./components/Delivery/Report";

//Customer

import EditCustomer from "./components/Customer/edit-Customer.component";
import CreateCustomer from "./components/Customer/create-Customer.component";
import CustomerList from "./components/Customer/Customer-list.component";
import Customerreport from "./components/Customer/Report";

//Exchange

import EditExchange from "./components/Exchange/Exchange-Update.component";
import CreateExchange from "./components/Exchange/Exchange-Create.component";
import ExchangeList from "./components/Exchange/Exchange-list.component";
import Exchangereport from "./components/Exchange/Report";

//Repair

import EditRepair from "./components/Repair/edit-Repair.component";
import CreateRepair from "./components/Repair/create-Repair.component";
import RepairList from "./components/Repair/Repair-list.component";
import Repairreport from "./components/Repair/Report";

//Employee Salary

import EditEmployeeSalary from "./components/EmployeeSalary/EmployeeSalary-Update.component";
import CreateEmployeeSalary from "./components/EmployeeSalary/EmployeeSalary-Create.component";
import EmployeeSalaryList from "./components/EmployeeSalary/EmployeeSalary-list.component";
import EmployeeSalaryreport from "./components/EmployeeSalary/Report";

function App() {

    return (<Router >
        <div className = "container" style={{backgroundImage: 'url("https://i.ytimg.com/vi/R9mXtzn8meE/maxresdefault.jpg")'}}>
        <Navbar/>
        <br/>
        <Route path = "/" exact component = { home }/>
        <Route path = "/Employee-List/" component = { EmployeeList }/> 
        <Route path = "/edit/:id" component = { EditEmployee }/> 
        <Route path = "/create" component = { CreateEmployee }/> 
        <Route path = "/Employee-report/" component = { Employeereport }/>

        <Route path = "/Stock-add/" component = { CreateStock }/>
        <Route path = "/Stock/" component = { StockList }/> 
        <Route path = "/Stock-Edit/:id" component = { EditStock }/>
        <Route path = "/Stock-report/" component = { Stockreport }/>

        <Route path = "/Supplier-add/" component = { CreateSupplier }/>
        <Route path = "/Supplier/" component = { SupplierList }/> 
        <Route path = "/Supplier-Edit/:id" component = { EditSupplier }/>
        <Route path = "/Supplier-report/" component = { Supplierreport }/>

        <Route path = "/Delivery-add/" component = { CreateDelivery }/>
        <Route path = "/Delivery/" component = { DeliveryList }/> 
        <Route path = "/Delivery-Edit/:id" component = { EditDelivery }/>
        <Route path = "/Delivery-report/" component = { Deliveryreport }/>

        <Route path = "/Customer-add/" component = { CreateCustomer }/>
        <Route path = "/Customer/" component = { CustomerList }/> 
        <Route path = "/Customer-Edit/:id" component = { EditCustomer }/>
        <Route path = "/Customer-report/" component = { Customerreport }/>

        <Route path = "/Exchange-add/" component = { CreateExchange }/>
        <Route path = "/Exchange/" component = { ExchangeList }/> 
        <Route path = "/Exchange-Edit/:id" component = { EditExchange }/>
        <Route path = "/Exchange-report/" component = { Exchangereport }/>

        <Route path = "/Repair-add/" component = { CreateRepair }/>
        <Route path = "/Repair/" component = { RepairList }/> 
        <Route path = "/Repair-Edit/:id" component = { EditRepair }/>
        <Route path = "/Repair-report/" component = { Repairreport }/>

        <Route path = "/EmployeeSalary-add/" component = { CreateEmployeeSalary }/>
        <Route path = "/EmployeeSalary/" component = { EmployeeSalaryList }/> 
        <Route path = "/EmployeeSalary-Edit/:id" component = { EditEmployeeSalary }/>
        <Route path = "/EmployeeSalary-report/" component = { EmployeeSalaryreport }/>
          </div > </Router>
    );
}

export default App;