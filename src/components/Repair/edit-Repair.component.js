import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import DatePicker from 'react-datepicker';

export default class EditStock extends Component {
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
            Discription:"",
            Unitprice: "",
            Contactno: "",
            Status: "",
            Exchange: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Repair/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Itemcode: response.data.Itemcode,
                    Issue: response.data.Issue,
                    Discription: response.data.Discription,
                    Unitprice: response.data.Unitprice,
                    Contactno: response.data.Contactno,
                    Status: response.data.Status,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Repair/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Repair: response.data.map(Repair => Repair.Issue),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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

//set Discription
onChangeDiscription(e) {
    this.setState({
        Discription: e.target.value,
    });
}

//set Unitprice



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


//set Discription
onChangeStatus(e) {
    this.setState({
        Status: e.target.value,
    });
}



    onSubmit(e) {
        e.preventDefault();

        const { Contactno, Unitprice } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno))|| (Contactno.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );


        } else if (!cup.test(String(Unitprice))) {
            swal(
                "Invalid  Unit price!",
                " Unit price Should be number!",
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
                .post('http://localhost:5000/Repair/update/' + this.props.match.params.id, Repair)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Repair/"));
            });
        }

    }

    render() {
        return (<div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://thumbs.dreamstime.com/b/sales-representative-abstract-concept-vector-illustration-b-agent-telemarketing-commercial-direct-marketing-business-development-194516275.jpg" width="100%" height="90%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Repair Details </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Repair Item ID: </label> 
            <input type = "number"
            placeholder = "Repair ID"
            required className = "form-control"
            value = { this.state.Itemcode }
            onChange = { this.onChangeItemcode }
            /> 
            </div> <div className = "form-group" >
        
            <label > Issue : </label> 
            <input type = "text"
            placeholder = "Issue Name"
            required className = "form-control"
            value = { this.state.Issue }
            onChange = { this.onChangeIssue }
            /> 
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
            <label > Amount : </label>
            <input type = "number"
            placeholder = "Unitprice"
            required  className = "form-control"
            value = { this.state.Unitprice }
            onChange = { this.onChangeUnitprice }/> 
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
            <label >Repair Status : </label> 
            <input type = "text"
            placeholder = "Status"
            required  className = "form-control"
            value = { this.state.Status }
            onChange = { this.onChangeStatus }/>
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