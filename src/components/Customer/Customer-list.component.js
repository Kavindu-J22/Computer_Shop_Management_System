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
        <Link to = { "/edit/" + props.Customer._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteCustomer(props.exercise._id) }}>Delete</a > </td >
 
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

    deleteCustomer(id) {
        if (window.confirm('Are you sure?')) {


            axios.delete('http://localhost:5000/Customer/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                    Customer: this.state.Customer.filter(el => el._id !== id)
                })
                //}
        }
    }

    CustomerList() {
        return this.state.Customer.map(currentCustomer => {
            return <Customer Customer = { currentCustomer }
            deleteCustomer = { this.deleteCustomer }
            key = { currentCustomer._id }
            />;
        })
    }


    filterData(Customer, searchKey) {

        this.setState({
            Customer: this.state.Customer.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Customer/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ Customer: result })

        });

    }

    render() {
        return ( 
            <div className = "container" >
                <div className = "row" >
                    < div className = "col-lg-9 mt-2 mb-2" >
                    <b > <h4 > Customer List </h4> </b > </div > 
                    <div className = "col-lg-3 mt-2 mb-2" >

                    <input className = "form-control"
                    type = "search"
                    placeholder = "Search Customer Name.."
                    name = "searchQuery"
                    onChange = { this.handleSearchArea } >
                    </input> 

            </div > 
            </div>






            <table className = "table" >
            <thead className = "thead-light" >
                <tr >
                    <th > Cid </th>
                    <th > Customer Name </th> 
                    <th > Address </th>
                    <th > Phone </th> 
                    <th > Birth Day </th> 
                    <th > Email </th>
                    <th > Actions </th> 
                </tr > 
            </thead>
             <tbody > {
                this.state.Customer.map(props =>
                    <tr key = { props.id } >
                        <td > { props.Cid } </td> 
                        <td > { props.username } </td> 
                        <td > { props.Address } </td>  
                        <td > { props.Phone } </td> 
                        <td > { props.birthday } </td>  
                        <td > { props.Email } </td>
                        <td >
                        < Link to = { "/Customer-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit Details </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteCustomer(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 

                        </td >

                    </tr>
                )

            }

            </tbody>
            </table>

            <div style = {
                { float: 'right' }
            } >

            < Link to = "/Customer-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            Add New Customer  </button> </Link >

            </div>
            <div style = {{ float: 'left' }} >
            <Link to = "/Customer-report/" >

                   {/*  report button */}

                        <button type="button" class="btn btn-danger" variant = "primary" >Get Report </button>
            </Link >
            
            </div>

            </div>
        )
    }
}