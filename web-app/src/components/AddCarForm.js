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
                type:'',
                course:'',
                YoP:'',
                capacity:'',
                hp:'',
                ft:'',
                transmission:'',
                drive:''
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
                            <option value="Sedan">Sedan</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Vagon">Vagon</option>
                            <option value="VAN">VAN</option>
                            <option value="Hatchback">Hatchback</option>
                        </select>
                        <label className="custom_label">Type</label>
                    </div>
                    <div className="control_input">
                        <input name="YoP" type="text" className="custom_input" value={this.state.YoP} onChange={this.handleChange} required />
                        <label className="custom_label">Year of production</label>
                    </div>
                    <div className="control_input">
                        <input name="course" type="text" className="custom_input" value={this.state.course} onChange={this.handleChange} required />
                        <label className="custom_label">Course</label>
                    </div>
                    <div className="control_input">
                        <input name="capacity" type="text" className="custom_input" value={this.state.capacity} onChange={this.handleChange} required />
                        <label className="custom_label">Capacity</label>
                    </div>
                    <div className="control_input">
                        <input name="hp" type="text" className="custom_input" value={this.state.hp} onChange={this.handleChange} required />
                        <label className="custom_label">Horse power</label>
                    </div>
                    <div className="control_input">
                        <select name="ft" type="text" className="custom_input" value={this.state.ft} onChange={this.handleChange} required>
                            <option value="diesel">Diesel</option>
                            <option value="lpg">LPG</option>
                            <option value="petrol">Petrol</option>
                        </select>
                        <label className="custom_label">Fuel type</label>
                    </div>
                    <div className="control_input">
                        <input name="transmission" type="text" className="custom_input" value={this.state.transmission} onChange={this.handleChange} required />
                        <label className="custom_label">Transmission</label>
                    </div>
                    <div className="control_input">
                        <input name="drive" type="text" className="custom_input" value={this.state.drive} onChange={this.handleChange} required />
                        <label className="custom_label">Drive</label>
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