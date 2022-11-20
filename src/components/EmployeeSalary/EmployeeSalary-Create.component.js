import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
//import validator from 'validator'

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

export default class CreateEmployeeSalary extends Component {
    constructor(props) {
        super(props);


        this.onChangeEid = this.onChangeEid.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Eid: '',
            Username: '',
            Phone: '',
            Discription: '',
            Payment: '',
            Date: '',
            Email: '',
            EmployeeSalary: []
        }




    }



    //set the Eid

    onChangeEid(e) {
        this.setState({
            Eid: e.target.value
        })
    }

    //set the Username

    onChangeUsername(e) {
            this.setState({
                Username: e.target.value
            })
        }
        //set Phone
    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }

    //set Phone

    onChangeDiscription(e) {
            this.setState({
                Discription: e.target.value
            })
        }
        //Set birthday

    onChangePayment(e) {
        this.setState({
            Payment: e.target.value
        })
    }

    //Set Date

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        })
    }



    //set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
                //     if (.isEmail(Email)) {

        })
    }

    //submit Function

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

        const EmployeeSalary = {
            Eid: this.state.Eid,
            Username: this.state.Username,
            Phone: this.state.Phone,
            Discription: this.state.Discription,
            Payment: this.state.Payment,
            Date: this.state.Date,
            Email: this.state.Email
        }

        console.log(EmployeeSalary);

        axios.post('http://localhost:5000/EmployeeSalary/add', EmployeeSalary)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Employee Salary Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });
        }

        // window.location = '/create';

    }

    render() {
        return ( <div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>{ <img src="https://img.freepik.com/free-vector/flat-design-employee-benefits-illustration_23-2149499487.jpg?w=2000" width="110%" height="90%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Employee Salary </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >
            <div className = "form-group"
            style = {
                { marginBottom: '15px' }
            } >
                <label style = {
                    { marginBottom: '5px' }
                } > Employee ID </label> 
                    <input type = "number"
                    required className = "form-control"
                    name = "EmployeeSalary Code "
                    placeholder = "EmployeeSalary Code"
                    value = { this.state.Eid }
                    onChange = { this.onChangeEid }
                    /> 
            </div >

            <div className = "form-group" >
                <label> Employee Name: </label>
                    <input type = "text"
                    required className = "form-control"
                    name = "EmployeeSalary Name"
                    placeholder = "EmployeeSalary Name"
                    value = { this.state.Username }
                    onChange = { this.onChangeUsername }
                    />
            </div >


            <div className = "form-group" >
                <label > Phone: </label> 
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

                <label > Discription: </label> 
                <input type = "text"
                required className = "form-control"
                
                name = "Discription"
                placeholder = "Discription"
                value = { this.state.Discription }
                onChange = { this.onChangeDiscription }
            /> 
            </div >

            <div className = "form-group" >

                <label > Payment: </label> 
                <input type = "number"
                required className = "form-control"
                name = "Payment"
                placeholder = "Payment"
                value = { this.state.Payment }
                onChange = { this.onChangePayment }
                />  
            </div>


            <div className = "form-group" >

                <label > Date: </label> 
                <input type = "Date"
                required className = "form-control"
                name = "Date"
                placeholder = "Date"
                value = { this.state.Date }
                onChange = { this.onChangeDate }
                />  
            </div>


             <div className = "form-group" >

                <label > Email: </label> 
                <input type = "Email"
                required className = "form-control"
                name = "Email"
                placeholder = "Email"
                value = { this.state.Email }
                onChange = { this.onChangeEmail }
                />  
            </div>

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" / >
            </div>
            {" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}