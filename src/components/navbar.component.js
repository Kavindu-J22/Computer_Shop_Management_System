import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            < nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >
            <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}>Home |</Link>{' | '}
            <Link to = "/" className = "navbar-brand" >  </Link> 
            <div className = "collpase navbar-collapse" >
            <ul className = "navbar-nav mr-auto" >
            <li className = "navbar-item" >
            <Link to = "/Employee-List/" className = "nav-link" > Empolyee </Link> </li> 
            <li className = "navbar-item" >
            <Link to = "/Stock/" className = "nav-link" > Stock </Link> 
            </li > <li className = "navbar-item" >
            <Link to = "/Supplier/" className = "nav-link" > Seller </Link> </li >
            <li className = "navbar-item" >
            <Link to = "/Exchange/" className = "nav-link" >Exchanges </Link> 
            </li >
            <li className = "navbar-item" >
            <Link to = "/Customer/" className = "nav-link" >Customer </Link> 
            </li >
            <li className = "navbar-item" >
            <Link to = "/Delivery/" className = "nav-link" >Delivery </Link> 
            </li >
            <li className = "navbar-item" >
            <Link to = "/Repair/" className = "nav-link" >Repairs </Link> 
            </li >
            <li className = "navbar-item" >
            <Link to = "/EmployeeSalary/" className = "nav-link" >Employee Salary </Link> 
            </li >

            </ul > </div> </nav>
        );
    }
}