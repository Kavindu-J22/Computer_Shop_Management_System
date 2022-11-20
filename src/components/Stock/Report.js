import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const Stock = props => ( <
    tr>
    <
    td> { props.Stock.Itemcode } </td> <
    td> { props.Stock.Productname } </td> <
    td> { props.Stock.Discription } </td> <
    td > { props.Stock.Unitprice } </td> <
    td> { props.Stock.qty } </td> <

    td>
    <Link to = { "/edit/" + props.Stock._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteStock(props.Stock._id) }}>Delete</a > 
    </td> 
    </tr> 
)

export default class StockList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Stock: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Stock/')
            .then(response => {
                this.setState({ Stock: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Stock/')
            .then(response => {
                this.setState({ Stock: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    StockList() {
        return this.state.Stock.map(currentStock => {
            return <Stock Stock = { currentStock }
            deleteStock = { this.deleteStock }
            key = { currentStock._id }
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
            <h3 > All Stock  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
         <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <
            th> Item Code </th> <
            th> Product Name </th> <
            th> Description </th> <
            th> Unit Price </th> <
            th> Quantity </th>
          
            </tr> </thead>

            <tbody>  {
                this.state.Stock.map((props) => ( 
                    <tr key = { props.Lid }>
                   <
                    td> { props.Itemcode } </td> <
                    td> { props.Productname } </td>  <
                    td> { props.Discription } </td>  < 
                    td> { props.Unitprice } </td>  < 
                    td> { props.qty } </td> 
                    
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