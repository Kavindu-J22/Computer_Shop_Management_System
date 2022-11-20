import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const Repair = props => ( <
    tr>
    <
    td> { props.Repair.Itemcode } </td> 
    <td> { props.Repair.Issue } </td> 
    <td> { props.Repair.Discription } </td>
    <td> { props.Repair.Unitprice } </td> 
    <td> { props.Repair.Contactno } </td>
    <td> { props.Repair.Status } </td>  
    <td>
    <Link to = { "/edit/" + props.Repair._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteRepair(props.Repair._id) }}>Delete</a > 
    </td> 
    </tr> 
)

export default class RepairList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Repair: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Repair/')
            .then(response => {
                this.setState({ Repair: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Repair/')
            .then(response => {
                this.setState({ Repair: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    RepairList() {
        return this.state.Repair.map(currentRepair => {
            return <Repair Repair = { currentRepair }
            deleteRepair = { this.deleteRepair }
            key = { currentRepair._id }
            />;
        })
    }



    myfunction(){
   
        window.print();
       }


  
    

    render() {
        return ( 
            <div className = "container" >
            <div>
           
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Repair  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
         <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr>
            <th> Item Code </th> 
            <th> Issue </th> 
            <th> Description </th> 
            <th> Unit Price </th> 
            <th> Contactno </th>
            <th> Status </th>
          
            </tr> </thead>

            <tbody>  {
                this.state.Repair.map((props) => ( 
                    <tr key = { props.Lid }>
                   <td> { props.Itemcode } </td> 
                   <td> { props.Issue } </td>  
                   <td> { props.Discription } </td>  
                   <td> { props.Unitprice } </td>  
                   <td> { props.Contactno } </td> 
                    <td> { props.Status } </td>
                    
                     </tr>))}  </tbody> </table> 
                     
            <
            div style = {
                { float: 'right' }
            } >

            
            <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
            
            </div>
            </div >
        );
    }
}