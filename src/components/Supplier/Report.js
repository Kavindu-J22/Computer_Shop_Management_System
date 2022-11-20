import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Supplier = (props) => ( 
    <tr>
    <td > { props.Supplier.SupID } </td> 
    <td> {props.Supplier.Supname} </td > { " " } 
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
            <h3 > All Supplier  </h3>
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
            <th> Email </th >
          
            </tr> </thead > 
            <tbody >  {
                this.state.Supplier.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.SupID } </td> 
                    <td> {props.Supname} </td > 
                    <td > { props.Amount } </td>
                    <td > { props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                     <td > { props.Email } </td> 
                    
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