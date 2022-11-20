import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

export default class EditStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {
            Itemcode: '',
            Productname: '',
            Discription: '',
            Unitprice: '',
            qty: '',
            Stock: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Stock/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Itemcode: response.data.Itemcode,
                    Productname: response.data.Productname,
                    Discription: response.data.Discription,
                    Unitprice: response.data.Unitprice,
                    qty: response.data.qty,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Stock/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Stock: response.data.map(Stock => Stock.Itemcode),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

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

        axios.post('http://localhost:5000/Stock/update/' + this.props.match.params.id, Stock)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Stock Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Stock/');
            });

    }

    render() {
        return ( 
            <div>
            <div class = "row ">
            <div class = "col-6">
            <br/> { <img src="https://thumbs.dreamstime.com/b/discipline-abstract-concept-vector-illustration-personal-quality-disciplined-employee-diligence-self-training-behavior-regulation-194516726.jpg" width="100%" height="90%" />  } 
            </div> <div class = "col-6"> 
            <div div class = "myformstyle">
            <div className = "card-body">
            <div className = "col-md-8 mt-4 mx-auto"> </div>  
            <h3 className = "text-center">
            <font face = "Comic sans MS"
            size = "6" > Edit Stock Details </font> 
            </h3><br></br>

            <br></br>

            <form onSubmit = { this.onSubmit } >

                    <div className = "form-group"style = {{ marginBottom: '15px' }} >
                        <label style = {{ marginBottom: '5px' }} > Item code </label> 
                        <input type = "number"
                        required className = "form-control"
                        name = "Item Code "
                        placeholder = "Enter Code"
                        value = { this.state.Itemcode }
                        onChange = { this.onChangeItemcode }
                        /> 
                    </div >

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
                    <label > Description: </label> <
                        input type = "text"
                        required className = "form-control"
                        name = "Description"
                        placeholder = "Enter Description"
                        value = { this.state.Discription }
                        onChange = { this.onChangeDiscription }
                        /> 
                </div>


                <div className = "form-group" >
                    <label> Unit Price: </label> <
                        input type = "number"
                        required className = "form-control"
                        name = "Unit Price"
                        placeholder = "Enter Unit Price"
                        value = { this.state.Unitprice }
                        onChange = { this.onChangeUnitprice }
                        /> 
                </div >


                <div className = "form-group" >
                    <label> Quantity: </label> <
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
            </div>{" "} </form > 
            </div > </div > </div > 
            </div > < br / > < br / > </div>
        );
    }
}