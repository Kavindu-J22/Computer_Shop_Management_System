import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from "react-bootstrap";



const Stock = props => ( 
<tr >
            <td> { props.Stock.Itemcode } </td> 
            <td> { props.Stock.Productname } </td> 
            <td> { props.Stock.Discription } </td> 
            <td> { props.Stock.Unitprice } </td> 
            <td> { props.Stock.qty } </td> 
            <td>
                <Link to = { "/edit/" + props.Stock._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteStock(props.Stock._id) }}>Delete</a > 
            </td > 
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

    deleteStock(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Stock/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Stock: this.state.Stock.filter(el => el._id !== id)
            })
        }
    }

    StockList() {
        return this.state.Stock.map(currentStock => {
            return <Stock Stock = { currentStock }
            deleteStock = { this.deleteStock }
            key = { currentStock._id }
            />;
        })
    }







    // SEARCH ITEM

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Stock/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Itemcode.includes(searchKey)
            )

            this.setState({ Stock: result })

        });

    }

    render() {
        return ( 
        <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-9 mt-2 mb-2" >
                        <h4 > Stock List </h4> 
                    </div> 


            {/* search bar  */}
            
                    <div className = "col-lg-3 mt-2 mb-2" >
                        <input className = "form-control"
                            type = "search"
                            placeholder = "Search Item Code.."
                            name = "searchQuery"
                            onChange = { this.handleSearchArea } >
                        </input> 
                    </div > 
                </div> 
                    <table className = "table" >
                            <thead className = "thead-light" >
                                <tr>
                                    <th> Item Code </th> 
                                    <th> Product Name </th> 
                                    <th> Description </th> 
                                    <th> Unit Price </th> 
                                    <th > Quantity </th> 
                                    <th > Action </th> 
                                </tr > 
                            </thead> 
                                <tbody> { this.state.Stock.map(props =>
                                    <tr key = { props.id } >
                                        <td > { props.Itemcode } </td> 
                                        <td > { props.Productname } </td> 
                                        <td > { props.Discription } </td>  
                                        <td > { props.Unitprice } </td>  
                                        <td > { props.qty } </td>  
                                        
                                        <td>
                                         
                                        < Link to = { "/Stock-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Update Stock </Button> |</Link > 
                                        <a href = ""onClick = {() => {this.deleteStock(props._id);}} >  
                                         <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                                         
                                       
                                        
                                        </td >
                                    </tr>
                                    
                                    )}

                                </tbody> 
                    </table >


                    <div style = {{ float: "right" }}>
                    
                    < Link to = "/Stock-add/" >
                    <button type = "button" class = "btn btn-success" variant = "primary" >
                    Add New Stock  </button> </Link > </div>
                    <div style = {{ float: 'left' }} >
                    <Link to = "/Stock-report/" >
                                <button type="button" class="btn btn-danger" variant = "primary" >Get Report </button></Link ></div>
            </div>
        )
    }
}