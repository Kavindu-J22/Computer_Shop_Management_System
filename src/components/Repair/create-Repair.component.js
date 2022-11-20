import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";


export default class CreateRepair extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeIssue = this.onChangeIssue.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Itemcode: "",
            Issue: "",
            Discription: "",
            Unitprice: "",
            Contactno: "",
            Status: "",
            Repair: [],
        };
    }

    //set the Itemcode

    onChangeItemcode(e) {
        this.setState({
            Itemcode: e.target.value,
        });
    }

    //set the Issue

    onChangeIssue(e) {
        this.setState({
            Issue: e.target.value,
        });
    }

    //set Amount
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value,
        });
    }

    //set Date

    onChangeUnitprice(e) {
            this.setState({
                Unitprice: e.target.value,
            });
        }
        //set Contactno
    onChangeContactno(e) {
        this.setState({
            Contactno: e.target.value,
        });

    }

        // set Discription
    onChangeStatus(e) {
        this.setState({
            Status: e.target.value,
        });
    }



    //submit Function

    onSubmit(e) {
        e.preventDefault();
        const { Contactno, Unitprice } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno)) || (Contactno.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );

        } else if (!cup.test(String(Unitprice))) {
            swal(
                "Invalid  Unit price!",
                " Unitprice Should be number!",
                "error"
            );
        } else {

            const Repair = {
                Itemcode: this.state.Itemcode,
                Issue: this.state.Issue,
                Discription: this.state.Discription,
                Unitprice: this.state.Unitprice,
                Contactno: this.state.Contactno,
                Status: this.state.Status,

            };

            console.log(Repair);

            axios
                .post("http://localhost:5000/Repair/add", Repair)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Repair Added Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Repair/"));
            });
        }
    }


    render() 
    {
        return (<div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>{ <img src="https://img.freepik.com/free-vector/mobile-device-repair-abstract-concept-illustration_335657-1896.jpg?w=2000" width="100%" height="90%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Repair Order </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >
                        <div className = "form-group" style = {{ marginBottom: '15px' }} >
                            <label style = {{ marginBottom: '5px' }} > Item code </label> 
                            <input type = "number"
                            required className = "form-control"
                            name = "Item Code "
                            placeholder = "Enter Code"
                            value = { this.state.Itemcode }
                            onChange = { this.onChangeItemcode }/> 
                        </div>

                        <div className = "form-group" >
                            <label> Issue : </label>
                             < input type = "text"
                            required className = "form-control"
                            name = "Issue"
                            placeholder = "Enter Issue"
                            value = { this.state.Issue }
                            onChange = { this.onChangeIssue }/> 
                        </div > 
                        
                        <div className = "form-group" >
                            <label> Description: </label>
                             <input type = "text"
                            required className = "form-control"
                            name = "Description"
                            placeholder = "Enter Description"
                            value = { this.state.Discription }
                            onChange = { this.onChangeDiscription }/> 
                        </div >


                        <div className = "form-group" >
                            <label > Price: </label> 
                            <input type = "number"
                            required className = "form-control"
                            name = "Unit Price"
                            placeholder = "Enter Unit Price"
                            value = { this.state.Unitprice }
                            onChange = { this.onChangeUnitprice }/> 
                        </div>


                        <div className = "form-group" >
                            <label > Contact Number : </label> 
                            <input type = "number"
                            required className = "form-control"
                            name = "Contactno"
                            placeholder = "Contact no"
                            value = { this.state.Contactno }
                            onChange = { this.onChangeContactno}
                            /> 
                        </div >

                        <div className = "form-group" >
                            <label > Repair Status : </label> 
                            <input type = "text"
                            required className = "form-control"
                            name = "Status"
                            placeholder = "Repair Status"
                            value = { this.state.Status }
                            onChange = { this.onChangeStatus}
                            /> 
                        </div >


                        <div className = "form-group" >
                            <input type = "submit"
                            value = "Add To Repair"
                            className = "btn btn-primary" / >
            </div>
            {" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}
