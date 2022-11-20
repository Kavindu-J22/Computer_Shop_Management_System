import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Delivery = (props) => ( 
    <tr>
    <td > { props.Delivery.DPID } </td> 
    <td> {props.Delivery.DPname} </td > { " " } 
    <td> {props.Delivery.DPPlace} </td > { " " } 
    <td> {props.Delivery.DPItem} </td > { " " } 
    <td > { props.Delivery.Amount } </td>{" "}
     <td > { props.Delivery.Date.substring(0, 10) } </td>{" "}
    <td > { props.Delivery.Contactno } </td> 
   
    
    <td >
    <Link to = { "/Delivery/" + props.Delivery._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteDelivery(props.Delivery._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SupplierList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Delivery: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteDelivery(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Delivery/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Delivery: this.state.Delivery.filter((el) => el._id !== id),
            });
        }
    }

    DeliveryList() {
        return this.state.Delivery.map((currentDelivery) => {
            return ( <
                Delivery Delivery = { currentDelivery }
                deleteDelivery = { this.deleteDelivery }
                key = { currentDelivery._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Delivery/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.DPname.includes(searchKey)|| props.DPname.includes(searchKey)
            );

            this.setState({ Delivery: result });
        });
    };

    

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Delivery Details  </h3>
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
            <th > ID </th> <th>  Name </th > <th>  Address </th > <th> Item </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th>
           
            <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.Delivery.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.DPID } </td> 
                    <td> {props.DPname} </td > 
                    <td> {props.DPPlace} </td > 
                    <td> {props.DPItem} </td > 
                    <td > { props.Amount } </td>
                    <td > {props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                    
                    <td >
                    < Link to = { "/Delivery-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Update details </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteDelivery(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Ignore </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Delivery-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            Add New Delivery  </button> </Link > </div>
            <div style = {{ float: 'left' }} >
            <Link to = "/Delivery-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button></Link ></div> 
            </div >
        );
    }
}