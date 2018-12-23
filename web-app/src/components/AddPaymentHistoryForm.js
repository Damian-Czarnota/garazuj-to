import React, { Component, Fragment } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class AddPaymentHistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price:'',
            description:'',
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        if(event.target)
            this.setState({[event.target.name]: event.target.value});
        else if(event)
            this.setState({startDate: event });
    }

    render(){
        return(
            <Fragment>
                <div className="control_input">
                    <input name="price" type="text" className="custom_input" value={this.state.price} onChange={this.handleChange} required />
                    <label className="custom_label">Price</label>
                </div>
                <div className="control_input">
                    <input name="description" type="text" className="custom_input" value={this.state.description} onChange={this.handleChange} required />
                    <label className="custom_label">Description</label>
                </div>
                <div className="control_input">
                    <DatePicker
                        todayButton={"Today"}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        className="custom_input"
                        dateFormat="dd/MM/yyyy"
                        popperPlacement="bottom"
                    />
                    <label className="custom_label-active">Date</label>
                </div>
                <button className="btn btn-primary" onClick={(e) => {this.props.save(this.state)}}>Save</button>
            </Fragment>
        )
    }
}
