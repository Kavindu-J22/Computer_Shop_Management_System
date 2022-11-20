import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";


export default class CreateExchange extends Component {
    constructor(props) {
        super(props);

        this.onChangeEXID = this.onChangeEXID.bind(this);
        this.onChangeEXname = this.onChangeEXname.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EXID: "",
            EXname: "",
            Amount: "",
            Date: "",
            Contactno: "",
            Discription: "",
            Exchange: [],
        };
    }

    //set the EXID

    onChangeEXID(e) {
        this.setState({
            EXID: e.target.value,
        });
    }

    //set the EXname

    onChangeEXname(e) {
        this.setState({
            EXname: e.target.value,
        });
    }

    //set Amount
    onChangeAmount(e) {
        this.setState({
            Amount: e.target.value,
        });
    }

    //set Date



    onChangeDate(e) {
            this.setState({
                Date: e.target.value,
            });
        }
        //set Contactno
    onChangeContactno(e) {
        this.setState({
            Contactno: e.target.value,
        });

    }

        // set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value,
        });
    }



    //submit Function

    onSubmit(e) {
        e.preventDefault();
        const { Contactno, Amount } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno)) || (Contactno.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );

        } else if (!cup.test(String(Amount))) {
            swal(
                "Invalid  Amount!",
                " Amount Should be number!",
                "error"
            );
        } else {

            const Exchange = {
                EXID: this.state.EXID,
                EXname: this.state.EXname,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,
                Discription: this.state.Discription,

            };

            console.log(Exchange);

            axios
                .post("http://localhost:5000/Exchange/add", Exchange)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Exchange/"));
            });
        }
    }

    

    render() {
        return ( 
            <div>
            <div class = "row ">
            <div class = "col-6">
            <br/> { <img src="https://img.freepik.com/free-vector/sales-contract-terms-abstract-concept-illustration_335657-3940.jpg" width="100%" height="90%" /> } 
            </div> <div class = "col-6"> 
            <div div class = "myformstyle">
            <div className = "card-body">
            <div className = "col-md-8 mt-4 mx-auto"> </div>  
            <h3 className = "text-center">
            <font face = "Comic sans MS"
            size = "6" > Exchange Management </font> 
            </h3><br></br>

            <br></br>

            <form onSubmit = { this.onSubmit } >


            < div className = "form-group" >
            <label > Exchange ID: </label> 
             <input type = "number"
            placeholder = "Exchange ID"
            required className = "form-control"
            onChange = { this.onChangeEXID }
            />  
            </div > 
            
            < div className = "form-group" >

            <label > Title : </label>  
            <input type = "text"
            placeholder = "Exchange Name"
            required className = "form-control"
            onChange = { this.onChangeEXname }
            />  
            </ div > 

            < div className = "form-group" >
            <label > Amount: </label> 
            < input type = "Number"
            placeholder = "Amount"
            required className = "form-control"
            onChange = { this.onChangeAmount }
            /> 
            
            </div >
            <div className = "form-group" >
           
            <label > Bill Date: </label> <
            input type = "date"
            placeholder = "Date"
            required className = "form-control"
            onChange = { this.onChangeDate }
            />
            </div>  

            <div className = "form-group" >
            <label> Contact No: </label>  
            <input type = "number"
            placeholder = "Contact No"
            required className = "form-control"
            onChange = { this.onChangeContactno }
            />
             </div >

             < div className = "form-group" >
            <label > Discription : </label> 
             <input type = "text"
            placeholder = "Discription"
            required className = "form-control"
            onChange = { this.onChangeDiscription }
            />  
            </div > 

            <div className = "form-group" >
            <input type = "submit"
            value = "Add Payment"
            className = "btn btn-primary" / >
            </div>{" "} </form > 
            </div > </div > </div > 
            </div > < br / > < br / > </div>
        );
    }
}