import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const Customer = props => ( 
    <tr >
        <td > { props.Customer.Cid } </td>
        <td > { props.Customer.username } </td> 
        <td > { props.Customer.Address } </td> 
        <td > { props.Customer.Phone } </td> 
        <td > { props.Customer.birthday} </td>
        <td > { props.Customer.Email } </td>
        <td >
        <Link to = { "/edit/" + props.Customer._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteCustomer(props.exercise._id) }}>Delete</a > 
        </td > 
    </tr> 
)

export default class CustomerList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Customer: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Customer/')
            .then(response => {
                this.setState({ Customer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Customer/')
            .then(response => {
                this.setState({ Customer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    CustomerList() {
        return this.state.Customer.map(currentCustomer => {
            return <Customer Customer = { currentCustomer }
            deleteCustomer = { this.deleteCustomer }
            key = { currentCustomer._id }
            />;
        })
    }







    
    myfunction(){
   
        window.print();
       }




    

    render() {
        return ( 
            <div className = "container" >
            <div>
           
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Customer  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
                <th > Cid </th>
                <th > Customer Name </th> 
                <th > Address </th>
                <th > Phone </th>
                <th > Birth Day </th>
                <th > Email </th> 
            
          
            </tr> </thead > 
            <tbody>  {
                this.state.Customer.map((props) => ( 
                    <tr key = { props.Lid }>
                    <td > { props.Cid } </td> 
                    <td > { props.username } </td>
                    <td > { props.Address } </td>  
                    <td > { props.Phone } </td>
                    <td > { props.birthday } </td>  
                    <td > { props.Email } </td>   

                    
                     </ tr >))}  </tbody> </table > 
                     
            <
            div style = {
                { float: 'right' }
            } >

            {/* PRINT BUTTON */}

            <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
            
            </div>
            </div >
        );
    }
}