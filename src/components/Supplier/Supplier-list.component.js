import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Supplier = (props) => ( 
    <tr>
    <td > { props.Supplier.SupID } </td> 
    <td> {props.Supplier.Supname} </td > { " " } 
    <td> {props.Supplier.Supitem} </td > { " " }
    <td > { props.Supplier.Amount } </td>{" "}
     <td > { props.Supplier.Date.substring(0, 10) } </td>{" "}
    <td > { props.Supplier.Contactno } </td> 
    <td > { props.Supplier.Email } </td> 
    
    <td >
    <Link to = { "/supdate/" + props.Supplier._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteSupplier(props.Supplier._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SupplierList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Supplier: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteSupplier(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Supplier/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Supplier: this.state.Supplier.filter((el) => el._id !== id),
            });
        }
    }

    SupplierList() {
        return this.state.Supplier.map((currentSupplier) => {
            return ( <
                Supplier Supplier = { currentSupplier }
                deleteSupplier = { this.deleteSupplier }
                key = { currentSupplier._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Supplier/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Supname.includes(searchKey)|| props.SupID.includes(searchKey)
            );

            this.setState({ Supplier: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Sellers Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by Name.." name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Name </th > < th > Received item </th> < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th>
            <th> Email </th >
            <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.Supplier.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.SupID } </td> 
                    <td> {props.Supname} </td > 
                    <td> {props.Supitem} </td > 
                    <td > { props.Amount } </td>
                    <td > { props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                     <td > { props.Email } </td> 
                    <td >
                    < Link to = { "/Supplier-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit Details </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteSupplier(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Ignore </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Supplier-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            Add New Seller  </button> </Link > </div> 


            <div style = {{ float: 'left' }} >
            <Link to = "/Supplier-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button></Link ></div>


            </div >
        );
    }
}