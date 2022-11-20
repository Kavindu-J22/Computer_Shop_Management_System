import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);


        this.onChangeEid = this.onChangeEid.bind(this);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangebirthday = this.onChangebirthday.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Eid: '',
            username: '',
            Address: '',
            Phone: '',
            birthday: '',
            Position: '',
            Gender: '',
            Email: '',
            Employee: []
        }
    }



    //set the Eid

    onChangeEid(e) {
        this.setState({
            Eid: e.target.value
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



    //set Position
    onChangePosition(e) {
        this.setState({
            Position: e.target.value
        })
    }

    //set Gender
    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    //set the Eid

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
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
        }else {

        const Employee = {
            Eid: this.state.Eid,
            username: this.state.username,
            Address: this.state.Address,
            Phone: this.state.Phone,
            birthday: this.state.birthday,
            Position: this.state.Position,
            Gender: this.state.Gender,
            Email: this.state.Email,
        }

        console.log(Employee);

        axios.post('http://localhost:5000/Employee/add', Employee)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Employee Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

        }

        // window.location = '/create';

    }

    render() 
    {
        return ( 
            <div  >
            <div class = "row ">
            <div class = "col-6" ><br></br>
            <br/>{ <img src="https://thumbs.dreamstime.com/b/project-delivery-abstract-concept-vector-illustration-planning-successful-management-time-budget-customer-expectations-198849838.jpghttps://thumbs.dreamstime.com/b/project-delivery-abstract-concept-vector-illustration-planning-successful-management-time-budget-customer-expectations-198849838.jpg" width="110%" height="75%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Employee </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >
                        <div className = "form-group" style = {{ marginBottom: '15px' }} >
                            <label style = {{ marginBottom: '5px' }} > Employee ID </label> 
                            <input type = "number"
                            required className = "form-control"
                            name = "Employee Code"
                            placeholder = "Employee Code"
                            value = { this.state.Eid }
                            onChange = { this.onChangeEid}/> 
                        </div>
                        <div className = "form-group" >
                            <label> User Name: </label>
                             <input type = "text"
                            required className = "form-control"
                            name = "User Name"
                            placeholder = "Enter User Name"
                            value = {this.state.username }
                            onChange = { this.onChangeusername }/> 
                        </div > 
                        <div className = "form-group" >
                            <label> Address: </label>
                             <input type = "text"
                            required className = "form-control"
                            name = "Address"
                            placeholder = "Enter Address"
                            value = { this.state.Address }
                            onChange = { this.onChangeAddress }/> 
                        </div >


                        <div className = "form-group" >
                            <label > Phone: </label>
                             <input type = "number"
                            required className = "form-control"
                            name = "Phone"
                            placeholder = "Enter Phone"
                            value = { this.state.Phone }
                            onChange = { this.onChangePhone }/> 
                        </div>


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
                            <label > Position: </label> 
                            <input type = "text"
                            required className = "form-control"
                            name = "Position"
                            placeholder = "Enter Position"
                            value = { this.state.Position }
                            onChange = { this.onChangePosition }
                            /> 
                        </div >

                        <div className = "form-group" >
                            <label > Gender: </label> 
                            <input type = "text"
                            required className = "form-control"
                            name = "Gender"
                            placeholder = "Enter Gender"
                            value = { this.state.Gender }
                            onChange = { this.onChangeGender }
                            /> 
                        </div >

                        <div className = "form-group" >
                            <label > Email: </label> 
                            <input type = "Email"
                            required className = "form-control"
                            name = "Email"
                            placeholder = "@gmail.com"
                            value = { this.state.Email }
                            onChange = { this.onChangeEmail }
                            /> 
                        </div >


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