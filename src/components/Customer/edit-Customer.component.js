import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'


export default class EditCustomer extends Component {
    constructor(props) {
        super(props);


        this.onChangeCid = this.onChangeCid.bind(this);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangebirthday = this.onChangebirthday.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Cid: '',
            username: '',
            Address: '',
            Phone: '',
            birthday: '',
            Email: '',
            Customer: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Customer/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Cid: response.data.Cid,
                    username: response.data.username,
                    Address: response.data.Address,
                    birthday: response.data.birthday,
                    Phone: response.data.Phone,
                    Email: response.data.Email,

                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Customer/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Customer: response.data.map(Customer => Customer.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //set the Cid

    onChangeCid(e) {
        this.setState({
            Cid: e.target.value
        })
    }

    //set the username

    onChangeusername(e) {
            this.setState({
                username: e.target.value
            })
        }
        //set Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    //set Phone

    onChangePhone(e) {
            this.setState({
                Phone: e.target.value
            })
        }
        //Set birthday

    onChangebirthday(e) {
        this.setState({
            birthday: e.target.value

        })
    }



    //set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const { Phone } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Phone))|| (Phone.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );


        }else{

        const Customer = {
            Cid: this.state.Cid,
            username: this.state.username,
            Address: this.state.Address,
            Phone: this.state.Phone,
            birthday: this.state.birthday,
            Email: this.state.Email
        }

        console.log(Customer);

        axios.post('http://localhost:5000/Customer/update/' + this.props.match.params.id, Customer)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Customer Successfully Updated",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Customer');
            });
        }

    }

    render() {
        return ( 
            <div>
            <div class = "row ">
            <div class = "col-6">
            <br/> { <img src="https://img.freepik.com/free-vector/customer-relationship-management-concept-illustration_114360-7652.jpg?w=2000" width="100%" height="90%" />  } 
            </div> <div class = "col-6"> 
            <div div class = "myformstyle">
            <div className = "card-body">
            <div className = "col-md-8 mt-4 mx-auto"> </div>  
            <h3 className = "text-center">
            <font face = "Comic sans MS"
            size = "6" > Edit Customer Details </font> 
            </h3><br></br>

            <br></br>

            <form onSubmit = { this.onSubmit } >
            <div className = "form-group"
            style = {
                { marginBottom: '15px' }
            } >
            <label style = {
                { marginBottom: '5px' }
            } > Customer Code </label>

                    <input type = "number"
                    required className = "form-control"
                    name = "Customer Code "
                    placeholder = "Customer Code"
                    value = { this.state.Cid }
                    onChange = { this.onChangeCid }
                    /> 
            </div >
            <div className = "form-group" >
            <label > User Name: </label>

                    <input type = "text"
                    required className = "form-control"
                    name = "User Name"
                    placeholder = "Enter User Name"
                    value = { this.state.username }
                    onChange = { this.onChangeusername }
                    /> 
            </div >
             
            <div className = "form-group" >
            <label > Address: </label>

                <input type = "text"
                required className = "form-control"
                name = "Address"
                placeholder = "Enter Address"
                value = { this.state.Address }
                onChange = { this.onChangeAddress }
                /> 
            </div >


            <div className = "form-group" >
            <label> Phone: </label>

                <input type = "number"
                required className = "form-control"
                maxlength = "10"
                name = "Phone"
                placeholder = "Enter Phone"
                value = { this.state.Phone }
                onChange = { this.onChangePhone }
                /> 
            </div >


            <div className = "form-group" >
            <label > Birthday: </label> 

            <input type = "date"
            required className = "form-control"
            
            name = "birthday"
            placeholder = "Enter birthday"
            value = { this.state.birthday }
            onChange = { this.onChangebirthday }
            /> 
            </div >

            <div className = "form-group" >
            <label > Email: </label> 
                <input type = "email"
                required className = "form-control"
                name = "Email"
                placeholder = "Enter Email"
                value = { this.state.Email }
                onChange = { this.onChangeEmail }
                /> 
            </div >


            <div className = "form-group" >
                <input type = "submit"
                value = "Create"
                className = "btn btn-primary" / >
            </div>{" "} </form > 
            </div > </div > </div > 
            </div > < br / > < br / > </div>
        );
    }
}