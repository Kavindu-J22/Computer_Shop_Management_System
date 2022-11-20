import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";


export default class CreateDelivery extends Component {
    constructor(props) {
        super(props);

        this.onChangeDPID = this.onChangeDPID.bind(this);
        this.onChangeDPname = this.onChangeDPname.bind(this);
        this.onChangeDPPlace = this.onChangeDPPlace.bind(this);
        this.onChangeDPItem = this.onChangeDPItem.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            DPID: "",
            DPname: "",
            DPPlace: "",
            DPItem: "",
            Amount:"",
            Date: "",
            DateContactno: "",
            Delivery: [],
        };
    }



   //set the DPID

   onChangeDPID(e) {
    this.setState({
        DPID: e.target.value,
    });
}

//set the DPname

onChangeDPname(e) {
    this.setState({
        DPname: e.target.value,
    });
}

//set the DPPlace

onChangeDPPlace(e) {
    this.setState({
        DPPlace: e.target.value,
    });
}

//set the DPItem

onChangeDPItem(e) {
    this.setState({
        DPItem: e.target.value,
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

            const Delivery = {
                DPID: this.state.DPID,
                DPname: this.state.DPname,
                DPPlace: this.state.DPPlace,
                DPItem: this.state.DPItem,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,

            };

            console.log(Delivery);

            axios
                .post("http://localhost:5000/Delivery/add", Delivery)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Payment Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Delivery/"));
            });
        }
    }

    

    render() {
        return ( 
            <div>
            <div class = "row ">
            <div class = "col-6">
            <br/> { <img src="https://img.freepik.com/premium-vector/isometric-delivery-service-deliveryman-shipping-parcel-logistic-vector-background-illustration_627510-250.jpg?w=2000" width="100%" height="90%" />  } 
            </div> <div class = "col-6"> 
            <div div class = "myformstyle">
            <div className = "card-body">
            <div className = "col-md-8 mt-4 mx-auto"> </div>  
            <h3 className = "text-center">
            <font face = "Comic sans MS"
            size = "6" > Delivery Payment </font> 
            </h3><br></br>

            <br></br>

            <form onSubmit = { this.onSubmit } >


                


            < div className = "form-group" >
            <label > Delivery Person 's ID: </label> 
             <input type = "number"
            placeholder = "Delivery Person's ID"
            required className = "form-control"
            onChange = { this.onChangeDPID }
            />  
            </div > 
            
            < div className = "form-group" >

            <label > Delivery Person 's Name: </label>  
            <input type = "text"
            placeholder = "Delivery Person's Name"
            required className = "form-control"
            onChange = { this.onChangeDPname }
            />  
            </ div > 

            < div className = "form-group" >
            <label > Delivery Address: </label> 
             <input type = "text"
            placeholder = "Delivery Address"
            required className = "form-control"
            onChange = { this.onChangeDPPlace }
            />  
            </div > 

            < div className = "form-group" >
            <label > Delivery Item: </label> 
             <input type = "text"
            placeholder = "Delivery Item"
            required className = "form-control"
            onChange = { this.onChangeDPItem }
            />  
            </div > 

            < div className = "form-group" >
            <label > Amount: </label> 
            < input type = "Number"
            placeholder = "Amount"
            required className = "form-control"
            onChange = { this.onChangeAmount }
            /> 
            
            </div >
            <div className = "form-group" >
           
            <label > Bill Date: </label> 
            <input type = "date"
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