import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";


export default class CreateSupplier extends Component {
    constructor(props) {
        super(props);

        this.onChangeSupID = this.onChangeSupID.bind(this);
        this.onChangeSupname = this.onChangeSupname.bind(this);
        this.onChangeSupitem = this.onChangeSupitem.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            SupID: "",
            Supname: "",
            Supitem: "",
            Amount:"",
            Date: "",
            Contactno: "",
            Email:"",
            Supplier: [],
        };
    }

    //set the SupID

    onChangeSupID(e) {
        this.setState({
            SupID: e.target.value,
        });
    }

    //set the Supname

    onChangeSupname(e) {
        this.setState({
            Supname: e.target.value,
        });
    }

     //set the Supitem

     onChangeSupitem(e) {
        this.setState({
            Supitem: e.target.value,
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


     //set Email
     onChangeEmail(e) {
        this.setState({
            Email: e.target.value,
        });
    }


    //submit Function

    onSubmit(e) {
        e.preventDefault();
        const { Contactno, Amount } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno))|| (Contactno.length != 10)) {
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

            const Supplier = {
                SupID: this.state.SupID,
                Supname: this.state.Supname,
                Supitem: this.state.Supitem,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,
                Email: this.state.Email,
               
            };

            console.log(Supplier);

            axios
                .post("http://localhost:5000/Supplier/add", Supplier)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Supplier/"));
            });
        }
    }

    render() {
        return ( <div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>{ <img src="https://d38cf3wt06n6q6.cloudfront.net/tyasuitefront/webgpcs/images/vendor-management.png" width="100%" height="90%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Seller </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label >Supplier ID: </label> 
            <input type = "number"
            placeholder = "Supplier ID"
            required className = "form-control"
            onChange = { this.onChangeSupID }
            /> 
            </div> <div className = "form-group" >
          
            <label > Supplier Name: </label>
            <input type = "text"
            placeholder = "Supplier Name"
            required className = "form-control"
            onChange = { this.onChangeSupname }
            /> 
            </div > 

            <div className = "form-group" >
            <label >Received item: </label> 
            <input type = "text"
            placeholder = "Received item"
            required className = "form-control"
            onChange = { this.onChangeSupitem }
            /> 
            </div>

            <div className = "form-group" >
            
            <label > Amount: </label> 
           
            <input type = "number"
            placeholder = "Amount"
            required  className = "form-control"
            onChange = { this.onChangeAmount }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label>
            <input type = "date"
            placeholder = "Date"
            required  className = "form-control"
            onChange = { this.onChangeDate }/>


            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "number"
            placeholder = "Contact No"
            required  className = "form-control"
            onChange = { this.onChangeContactno }/>
             </div > 

             <div className = "form-group" >
            <label > Email: </label> 
            <input type = "Email"
            placeholder = "Email"
            required  className = "form-control"
            onChange = { this.onChangeEmail }/>
             </div >

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Add "
            className = "btn btn-primary" />
            </div>
            {" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}