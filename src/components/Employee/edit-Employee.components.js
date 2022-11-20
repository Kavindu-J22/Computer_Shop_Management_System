import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'


export default class EditETask extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/Employee/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Eid: response.data.Eid,
                    username: response.data.username,
                    Address: response.data.Address,
                    birthday: response.data.birthday,
                    Phone: response.data.Phone,
                    Position: response.data.Position,
                    Gender: response.data.Gender,
                    Email: response.data.Email,


                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Task: response.data.map(Task => Task.Taskname),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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


     //set the Email

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
        }else {

        const Employee = {
            Eid: this.state.Eid,
            username: this.state.username,
            Address: this.state.Address,
            Phone: this.state.Phone,
            birthday: this.state.birthday,
            Position: this.state.Position,
            Gender: this.state.Gender,
            Email: this.state.Email
        }

        console.log(Employee);

        axios.post('http://localhost:5000/Employee/update/' + this.props.match.params.id, Employee)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Employee Successfully Updated",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });
        }
    }

    render() {
        return (
            <div>
            <div class = "row ">
            <div class = "col-6">
            <br/> { <img src="https://previews.123rf.com/images/liravega258/liravega2581803/liravega258180300008/96674002-time-management-flat-vector-illustration.jpg" width="100%" height="90%" />  } 
            </div> <div class = "col-6"> 
            <div div class = "myformstyle">
            <div className = "card-body">
            <div className = "col-md-8 mt-4 mx-auto"> </div>  
            <h3 className = "text-center">
            <font face = "Comic sans MS"
            size = "6" > Edit Employee Details </font> 
            </h3><br></br>

            <br></br>

            <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label> User Name: </label> 
            <input type = "text"
            required className = "form-control"
            name = "User Name"
            placeholder = "Enter User Name"
            value = { this.state.username }
            onChange = { this.onChangeusername }
            /> 
            </div>
             <div className = "form-group" >
            <label> Address: </label>
             <input type = "text"
            required className = "form-control"
            name = "Address"
            placeholder = "Enter Address"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/> 
            </div>


            <div className = "form-group" >
            <label> Phone: </label> 
            <input type = "text"
            required className = "form-control"
            maxlength = "10"
            name = "Phone"
            placeholder = "Enter Phone"
            value = { this.state.Phone }
            onChange = { this.onChangePhone }/> 
            </div>


            <div className = "form-group" >
            <label> Birthday: </label> 
            <input type = "date"
            required className = "form-control"
            
            name = "birthday"
            placeholder = "Enter birthday"
            value = { this.state.birthday }
            onChange = { this.onChangebirthday } /> 
            </div>

            <div className = "form-group" >
            <label> Position: </label>
             <input type = "text"
            required className = "form-control"
            name = "Position"
            placeholder = "Enter Position"
            value = { this.state.Position }
            onChange = { this.onChangePosition }/> 
            </div>

            <div className = "form-group" >
            <label> Gender: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Gender"
            placeholder = "Enter Gender"
            value = { this.state.Gender }
            onChange = { this.onChangeGender }/> 
            </div>

            <div className = "form-group" >
            <label> Email: </label> 
            <input type = "Email"
            required className = "form-control"
            name = "Email"
            placeholder = "Enter Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/> 
            </div>


            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary" / >
            </div>{" "} </form > 
            </div > </div > </div > 
            </div > < br / > < br / > </div>
        );
    }
}