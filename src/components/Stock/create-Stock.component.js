import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

import "react-datepicker/dist/react-datepicker.css";

export default class CreateStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Itemcode: '',
            Productname: '',
            Discription: '',
            Unitprice: '',
            qty: '',
            Stock: []
        }
    }

    //set the Itemcode

    onChangeItemcode(e) {
        this.setState({
            Itemcode: e.target.value
        })
    }

    //set the Productname

    onChangeProductname(e) {
            this.setState({
                Productname: e.target.value
            })
        }
        //set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value
        })
    }

    //set Unitprice

    onChangeUnitprice(e) {
        this.setState({
            Unitprice: e.target.value
        })
    }

    //Set qty

    onChangeqty(e) {
        this.setState({
            qty: e.target.value
        })
    }





    //submit Function

    onSubmit(e) {
        e.preventDefault();

        const Stock = {
            Itemcode: this.state.Itemcode,
            Productname: this.state.Productname,
            Discription: this.state.Discription,
            Unitprice: this.state.Unitprice,
            qty: this.state.qty
        }

        console.log(Stock);

        axios.post('http://localhost:5000/Stock/add', Stock)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Stock Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Stock/');
            });

        // window.location = '/create';

    }

    render() 
    {
        return ( <div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>{ <img src="https://www.clipartkey.com/mpngs/m/169-1693853_inventory-control-software-market-inventory-management.png" width="100%" height="90%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Stock </font>
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
                            <label> Product Name: </label> <
                            input type = "text"
                            required className = "form-control"
                            name = "Product Name"
                            placeholder = "Enter Product Name"
                            value = { this.state.Productname }
                            onChange = { this.onChangeProductname }/> 
                        </div > 
                        <div className = "form-group" >
                            <label> Description: </label> <
                            input type = "text"
                            required className = "form-control"
                            name = "Description"
                            placeholder = "Enter Description"
                            value = { this.state.Discription }
                            onChange = { this.onChangeDiscription }/> 
                        </div >


                        <div className = "form-group" >
                            <label > Unit Price: </label> <
                            input type = "number"
                            required className = "form-control"
                            name = "Unit Price"
                            placeholder = "Enter Unit Price"
                            value = { this.state.Unitprice }
                            onChange = { this.onChangeUnitprice }/> 
                        </div>


                        <div className = "form-group" >
                            <label > Quantity: </label> <
                            input type = "number"
                            required className = "form-control"
                            name = "Qty"
                            placeholder = "Enter Qty"
                            value = { this.state.qty }
                            onChange = { this.onChangeqty }
                            /> 
                        </div >

                        <div className = "form-group" >
                            <input type = "submit"
                            value = "Add To Stock"
                            className = "btn btn-primary" / >
            </div>
            {" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}
