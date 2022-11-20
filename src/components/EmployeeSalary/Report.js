import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const EmployeeSalary = props => ( 
    <tr >
        <td > { props.EmployeeSalary.Eid } </td>
        <td > { props.EmployeeSalary.Username } </td> 
        <td > { props.EmployeeSalary.Phone } </td> 
        <td > { props.EmployeeSalary.Discription } </td> 
        <td > { props.EmployeeSalary.Payment} </td>
        <td > { props.EmployeeSalary.Date} </td>
        <td > { props.EmployeeSalary.Email } </td>
        <td >
        <Link to = { "/edit/" + props.EmployeeSalary._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployeeSalary(props.exercise._id) }}>Delete</a > 
        </td > 
    </tr> 
)

export default class EmployeeSalaryList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            EmployeeSalary: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/EmployeeSalary/')
            .then(response => {
                this.setState({ EmployeeSalary: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/EmployeeSalary/')
            .then(response => {
                this.setState({ EmployeeSalary: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    EmployeeSalaryList() {
        return this.state.EmployeeSalary.map(currentEmployeeSalary => {
            return <EmployeeSalary EmployeeSalary = { currentEmployeeSalary }
            deleteEmployeeSalary = { this.deleteEmployeeSalary }
            key = { currentEmployeeSalary._id }
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
            <h3 > All Employee Salary  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
                    <th > Eid </th>
                    <th > Username </th> 
                    <th > Phone </th>
                    <th > Discription </th> 
                    <th > Payment </th> 
                    <th > Date </th>
                    <th > Email </th>
            
          
            </tr> </thead > 
            <tbody>  {
                this.state.EmployeeSalary.map((props) => ( 
                    <tr key = { props.Lid }>
                    <td > { props.Eid } </td> 
                    <td > { props.Username } </td>
                    <td > { props.Phone } </td>  
                    <td > { props.Discription } </td>
                    <td > { props.Payment } </td>  
                    <td > { props.Date } </td> 
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