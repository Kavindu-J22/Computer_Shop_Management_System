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
        <td > { props.EmployeeSalary.Date } </td> 
        <td > { props.EmployeeSalary.Email } </td> 
        <td >
        <Link to = { "/edit/" + props.EmployeeSalary._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployeeSalary(props.exercise._id) }}>Delete</a > </td >
 
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

    deleteEmployeeSalary(id) {
        if (window.confirm('Are you sure?')) {


            axios.delete('http://localhost:5000/EmployeeSalary/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                EmployeeSalary: this.state.EmployeeSalary.filter(el => el._id !== id)
                })
                //}
        }
    }

    EmployeeSalaryList() {
        return this.state.EmployeeSalary.map(currentEmployeeSalary => {
            return <EmployeeSalary EmployeeSalary = { currentEmployeeSalary }
            deleteEmployeeSalary = { this.deleteEmployeeSalary }
            key = { currentEmployeeSalary._id }
            />;
        })
    }


    filterData(EmployeeSalary, searchKey) {

        this.setState({
            EmployeeSalary: this.state.EmployeeSalary.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/EmployeeSalary/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Username.includes(searchKey)
            )

            this.setState({ EmployeeSalary: result })

        });

    }

    render() {
        return ( 
            <div className = "container" >
                <div className = "row" >
                    < div className = "col-lg-9 mt-2 mb-2" >
                    <b > <h4 > Employee Salary List </h4> </b > </div > 
                    <div className = "col-lg-3 mt-2 mb-2" >

                    <input className = "form-control"
                    type = "search"
                    placeholder = "Search Name.."
                    name = "searchQuery"
                    onChange = { this.handleSearchArea } >
                    </input> 

            </div > 
            </div>






            <table className = "table" >
            <thead className = "thead-light" >
                <tr >
                    <th > Eid </th>
                    <th > Username </th> 
                    <th > Phone </th>
                    <th > Discription </th> 
                    <th > Payment </th> 
                    <th > Date </th>
                    <th > Email </th>
                    <th > Actions </th> 
                </tr > 
            </thead>
             <tbody > {
                this.state.EmployeeSalary.map(props =>
                    <tr key = { props.id } >
                        <td > { props.Eid } </td> 
                        <td > { props.Username } </td> 
                        <td > { props.Phone } </td>  
                        <td > { props.Discription } </td> 
                        <td > { props.Payment } </td> 
                        <td > { props.Date } </td> 
                        <td > { props.Email } </td>
                        <td >
                        < Link to = { "/EmployeeSalary-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Change </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteEmployeeSalary(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Remove </Button> </a > 
                        </td >

                    </tr>
                )

            }

            </tbody>
            </table>

            <div style = {
                { float: 'right' }
            } >

            <Link to = "/EmployeeSalary-add/" >
            <button type = "button" class = "btn btn-success" Button variant = "primary" > Add New EmployeeSalary </button> 
            </Link >

            </div>
            <div style = {{ float: 'left' }} >
            <Link to = "/EmployeeSalary-report/" >

                   {/*  report button */}

                        <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button>
            </Link >
            
            </div>

            </div>
        )
    }
}