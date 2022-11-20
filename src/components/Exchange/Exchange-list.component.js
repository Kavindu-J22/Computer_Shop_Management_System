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

    deleteExchange(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Exchange/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Exchange: this.state.Exchange.filter((el) => el._id !== id),
            });
        }
    }

    ExchangeList() {
        return this.state.Exchange.map((currentExchange) => {
            return ( <
                Exchange Exchange = { currentExchange }
                deleteExchange = { this.deleteExchange }
                key = { currentExchange._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Exchange/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.EXname.includes(searchKey)|| props.EXname.includes(searchKey)
            );

            this.setState({ Exchange: result });
        });
    };

    

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Exchange Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by Title.." name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > ID </th> <th>  Title </th > < th > Amount </th> 
            <th > Date </th>  <th>Contact Number </th> <th>Discription </th>
           
            <th> Actions </th >  
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
                    
                    <td >
                    < Link to = { "/Exchange-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Update </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteExchange(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Remove </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Exchange-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            Add New Exchange  </button> </Link > </div>
            <div style = {{ float: 'left' }} >
            <Link to = "/Exchange-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button></Link ></div> 
            </div >
        );
    }
}