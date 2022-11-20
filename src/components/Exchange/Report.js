import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Exchange = (props) => ( 
    <tr>
    <td > { props.Exchange.EXID } </td> 
    <td> {props.Exchange.EXname} </td > { " " } 
    <td > { props.Exchange.Amount } </td>{" "}
     <td > { props.Exchange.Date.substring(0, 10) } </td>{" "}
    <td > { props.Exchange.Contactno } </td> 
    <td > { props.Exchange.Discription } </td> 
    
    <td >
    <Link to = { "/Exchange/" + props.Exchange._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteExchange(props.Exchange._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class ExchangeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Exchange: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Exchange/")
            .then((response) => {
                this.setState({ Exchange: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Exchange/")
            .then((response) => {
                this.setState({ Exchange: response.data });
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
            <h3 > All Exchange  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Name </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th> <th>Discription </th>
          
            </tr> </thead > 
            <tbody >  {
                this.state.Exchange.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.EXID } </td> 
                    <td> {props.EXname} </td > 
                    <td > { props.Amount } </td>
                    <td > {props.Date.substring(0, 10) } </td>
                     <td > { props.Contactno } </td> 
                     <td > { props.Discription } </td>
                    
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