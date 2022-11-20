import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import DatePicker from 'react-datepicker';

export default class EditStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeEXID = this.onChangeEXID.bind(this);
        this.onChangeExname = this.onChangeEXname.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            EXID: "",
            EXname: "",
            Amount:"",
            Date: "",
            Contactno: "",
            Discription: "",
            Exchange: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Exchange/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    EXID: response.data.EXID,
                    EXname: response.data.EXname,
                    Amount: response.data.Amount,
                    Date: response.data.Date,
                    Contactno: response.data.Contactno,
                    Discription: response.data.Discription,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Exchange/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Exchange: response.data.map(Exchange => Exchange.EXID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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


//set Discription
onChangeDiscription(e) {
    this.setState({
        Discription: e.target.value,
    });
}



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
                .post('http://localhost:5000/Exchange/update/' + this.props.match.params.id, Exchange)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Exchange/"));
            });
        }

    }

    render() {
        return (<div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://thumbs.dreamstime.com/b/revenue-agency-abstract-concept-vector-illustration-tax-law-remit-gst-hst-business-number-registration-savings-pension-plan-198849538.jpg" width="100%" height="90%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Exchange Details </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Exchange ID: </label> 
            <input type = "number"
            placeholder = "Exchange ID"
            required className = "form-control"
            value = { this.state.EXID }
            onChange = { this.onChangeEXID }
            /> 
            </div> <div className = "form-group" >
        
            <label > Titie : </label> 
            <input type = "text"
            placeholder = "Exchange Name"
            required className = "form-control"
            value = { this.state.EXname }
            onChange = { this.onChangeEXname }
            /> 
            </div >  
            <div className = "form-group" >
            
            <label > Amount: </label> 
            
            <input type = "number"
            placeholder = "Amount"
            required  className = "form-control"
            value = { this.state.Amount }
            onChange = { this.onChangeAmount }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label>
           

            <input type = "date"
            placeholder = "Enter date"
            required  className = "form-control"
            value = { this.state.Date }
            onChange = { this.onChangeDate }/> 
            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "number"
            placeholder = "Contact No"
            required  className = "form-control"
            value = { this.state.Contactno }
            onChange = { this.onChangeContactno }/>
             </div > 

             <div className = "form-group" >
            <label > Discription : </label> 
            <input type = "text"
            placeholder = "Discription"
            required  className = "form-control"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription }/>
             </div > 

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}