/**
 * Created by Damian.Czarnota on 2018-11-05.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddCarForm extends Component{
    static propTypes = {
        saveCar: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
                mark:'',
                model:'',
                type:'SEDAN',
                mileage:'',
                productionYear:'',
                engineSize:'',
                horsePower:'',
                fuelType:'DIESEL'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return(
            <div className="section__middle">
                <div className="details_section details_section-two-col">
                    <div className="control_input">
                        <input name="mark" type="text" className="custom_input" value={this.state.mark} onChange={this.handleChange} required/>
                        <label className="custom_label">Mark</label>
                    </div>
                    <div className="control_input">
                        <input name="model" type="text" className="custom_input" value={this.state.model} onChange={this.handleChange} required />
                        <label className="custom_label">Model</label>
                    </div>
                    <div className="control_input">
                        <select name="type" type="text" className="custom_input" value={this.state.type} onChange={this.handleChange} required>
                            <option value="SEDAN">Sedan</option>
                            <option value="COUPE">Coupe</option>
                            <option value="VAGON">Vagon</option>
                            <option value="VAN">VAN</option>
                            <option value="HATCHBACK">Hatchback</option>
                        </select>
                        <label className="custom_label">Type</label>
                    </div>
                    <div className="control_input">
                        <input name="productionYear" type="text" className="custom_input" value={this.state.productionYear} onChange={this.handleChange} required />
                        <label className="custom_label">Year of production</label>
                    </div>
                    <div className="control_input">
                        <input name="mileage" type="text" className="custom_input" value={this.state.mileage} onChange={this.handleChange} required />
                        <label className="custom_label">Mileage</label>
                    </div>
                    <div className="control_input">
                        <input name="engineSize" type="text" className="custom_input" value={this.state.engineSize} onChange={this.handleChange} required />
                        <label className="custom_label">Engine size</label>
                    </div>
                    <div className="control_input">
                        <input name="horsePower" type="text" className="custom_input" value={this.state.horsePower} onChange={this.handleChange} required />
                        <label className="custom_label">Horse power</label>
                    </div>
                    <div className="control_input">
                        <select name="fuelType" type="text" className="custom_input" value={this.state.fuelType} onChange={this.handleChange} required>
                            <option value="DIESEL">Diesel</option>
                            <option value="LPG">LPG</option>
                            <option value="PETROL">Petrol</option>
                            <option value="PETROL_AND_LPG">Petrol+LPG</option>
                            <option value="DIESEL_AND_LPG">Diesel+LPG</option>
                        </select>
                        <label className="custom_label">Fuel type</label>
                    </div>
                </div>
                <div className="section__end" style={{textAlign:'center'}}>
                    <button className="btn btn-primary" onClick={(e) => this.props.saveCar(this.state)}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={(e) => this.props.deleteCar(this.props.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}