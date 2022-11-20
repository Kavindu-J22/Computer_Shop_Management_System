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





    myfunction(){
   
        window.print();
       }


 

    

    render() {
        return ( 
            <div className = "container" >
            <div  >
           
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Delivery  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             </div>
             
            <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Name </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th>
          
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
                    
                     </ tr >))}  </tbody> </table > 
                     
            <
            div style = {
                { float: 'right' }
            } >

            
            <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
            
            </div>
            </div >
        );
    }
}