import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const Employee = props => ( <
    tr>
    <td> { props.Employee.Eid } </td> 
    <td> { props.Employee.username } </td> 
    <td> { props.Employee.Address } </td>  
    <td> { props.Employee.Phone } </td> 
    <td> { props.Employee.birthday} </td>  
    <td> { props.Employee.Position } </td> 
    <td> { props.Employee.Gender } </td> 
    <td> { props.Employee.Email } </td>
    <td>
    <Link to = { "Employee/edit/" + props.Employee._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployee(props.Employee._id) }}>Delete</a > 
    </td> 
    </tr> 
)

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Employee: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Employee/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Employee: this.state.Employee.filter(el => el._id !== id)
            })
        }
    }

    EmployeeList() {
        return this.state.Employee.map(currentEmployee => {
            return <Employee Employee = { currentEmployee }
            deleteEmployee = { this.deleteEmployee }
            key = { currentEmployee._id }
            />;
        })
    }


    filterData(Employee, searchKey) {

        this.setState({
            Employee: this.state.Employee.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Employee/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ Employee: result })

        });

    }

    render() {
        return ( 
            <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Employee List </h4>
             </div> 
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control"
            type = "search"
            placeholder = "Search employee Name.."
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </input>
             </div>
             </div>


            <table className = "table" >
            <thead className = "thead-light" >
            <tr>
            <
            th> Employee ID </th> 
            <th> Employee Name </th> 
            <th> Address </th> <
            th> Phone </th> 
            <th> Birthday </th> 
            <th> Position </th> 
            <th> Gender </th> 
            <th> Email </th>
            <th> Actions </th> 
            </tr> 
            </thead> 
            <tbody > {
                this.state.Employee.map(props =>
                    <tr key = { props.id } >
                    <td > { props.Eid } </td> 
                    <td > { props.username } </td> 
                     <td > { props.Address } </td>  
                    < td > { props.Phone } </td> 
                    <td > { props.birthday} </td>
                    < td > { props.Position } </td>
                    < td > { props.Gender } </td>
                    < td > { props.Email } </td>  
                    < td >
                    <Link to = { "/edit/" + props._id } > <Button data-inline ="true" variant = "warning btn-sm" >Update</Button> | </Link> <a href="" onClick={() => { this.deleteEmployee(props._id) }}>
                    <Button data-inline ="true" variant = "danger btn-sm" >  Remove  </Button>| </a > 
                    </td>

                    </tr>
                )

            }

            </tbody>
             </table>

            <div style = {{ float: 'right' }} >
            <Link to = "/create" >
            <button type="button" class="btn btn-success" Button variant = "primary" >Add New Employee </button> </Link ></div>

            <div style = {{ float: 'left' }} >
            <Link to = "/Employee-report/" >
            <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button></Link ></div>

            </div>
        )
    }
}