import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';



const Repair = props => ( 
<tr >
            <td> { props.Repair.Itemcode } </td> 
            <td> { props.Repair.Issue } </td> 
            <td> { props.Repair.Discription } </td> 
            <td> { props.Repair.Unitprice } </td> 
            <td> { props.Repair.Contactno } </td> 
            <td> { props.Repair.Status } </td>
            <td>
                <Link to = { "/edit/" + props.Repair._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteRepair(props.Repair._id) }}>Delete</a > 
            </td > 
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

    deleteRepair(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Repair/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Repair: this.state.Repair.filter(el => el._id !== id)
            })
        }
    }

    RepairList() {
        return this.state.Repair.map(currentRepair => {
            return <Repair Repair = { currentRepair }
            deleteRepair = { this.deleteRepair }
            key = { currentRepair._id }
            />;
        })
    }







    // SEARCH ITEM

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Repair/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Itemcode.includes(searchKey)
            )

            this.setState({ Repair: result })

        });

    }

    render() {
        return ( 
        <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-9 mt-2 mb-2" >
                        <h4 > Repair List </h4> 
                    </div> 


            {/* search bar  */}
            
                    <div className = "col-lg-3 mt-2 mb-2" >
                        <input className = "form-control"
                            type = "search"
                            placeholder = "Search by ItemCode.."
                            name = "searchQuery"
                            onChange = { this.handleSearchArea } >
                        </input> 
                    </div > 
                </div> 
                    <table className = "table" >
                            <thead className = "thead-light" >
                                <tr>
                                    <th> Item Code </th> 
                                    <th> Issue </th> 
                                    <th> Description </th> 
                                    <th> Price </th> 
                                    <th > Contact Number </th> 
                                    <th > Repair Status </th>
                                    <th > Action </th> 
                                </tr > 
                            </thead> 
                                <tbody> { this.state.Repair.map(props =>
                                    <tr key = { props.id } >
                                        <td > { props.Itemcode } </td> 
                                        <td > { props.Issue } </td> 
                                        <td > { props.Discription } </td>  
                                        <td > { props.Unitprice } </td>  
                                        <td > { props.Contactno } </td>
                                        <td > { props.Status } </td>  
                                        
                                        <td>
                                         < Link to = { "/Repair-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Update </Button> |</Link > 
                                            <a href = ""onClick = {() => {this.deleteRepair(props._id);}} >  
                                            <Button data-inline ="true" variant = "danger btn-sm" > Remove </Button> </a >  
                                        </td >
                                    </tr>
                                    )}

                                </tbody> 
                    </table >


                    <div style = {{ float: "right" }}>
                    
                    < Link to = "/Repair-add/" >
                    <button type = "button" class = "btn btn-success" variant = "primary" >
                    Add New Repair  </button> </Link > </div>
                    <div style = {{ float: 'left' }} >
                    <Link to = "/Repair-report/" >
                                <button type="button" class="btn btn-danger" variant = "primary" > Get Report </button></Link ></div>
            </div>
        )
    }
}