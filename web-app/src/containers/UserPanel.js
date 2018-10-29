/**
 * Created by Damian.Czarnota on 2018-10-24.
 */

import React, { Component } from 'react';

const initialState = {firstName:'Abc',lastName:'',email:''};

export default class UserPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            initialState:initialState,
            cars:[],
            car:{
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
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveCar = this.saveCar.bind(this);
    }

    handleChange(event){
        this.setState({car:{[event.target.name]: event.target.value}})
    }

    saveCar(){

    }

    render(){
        return(
            <div className="user_panel">
                <div className="header">
                    <h2 className="header__title">Account settings</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>Profile</span>
                        </div>
                        <div className="section__middle">
                            <div className="avatar_section">
                                <img src="https://www.comarch-cloud.com/jira/secure/useravatar?avatarId=10341&s=48" style={{width:96+'px',height:96+'px'}} className="circle-img" />
                                <button className="btn btn-primary">
                                    <label>Change<input type="file" /></label>
                                </button>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                            <div className="details_section">
                                <div className="control_input">
                                    <input name="firstName" type="text" className="custom_input" value={this.state.initialState.firstName} onChange={this.handleChange} formNoValidate />
                                    <label className="custom_label">First name</label>
                                </div>
                                <div className="control_input">
                                    <input name="lastName" type="text" className="custom_input" value={this.state.initialState.lastName} onChange={this.handleChange} formNoValidate />
                                    <label className="custom_label">Last name</label>
                                </div>
                                <div className="control_input">
                                    <input name="email" type="text" className="custom_input" value={this.state.initialState.email} onChange={this.handleChange} formNoValidate />
                                    <label className="custom_label">E-mail</label>
                                </div>
                                <div className="section__end">
                                    <button className="btn btn-primary" disabled>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__header">
                            <span>Car</span>
                        </div>
                        <div className="section__middle">
                            <div className="details_section details_section-two-col">
                                <div className="control_input">
                                    <input name="mark" type="text" className="custom_input" value={this.state.car.mark} onChange={this.handleChange} required/>
                                    <label className="custom_label">Mark</label>
                                </div>
                                <div className="control_input">
                                    <input name="model" type="text" className="custom_input" value={this.state.car.model} onChange={this.handleChange} required />
                                    <label className="custom_label">Model</label>
                                </div>
                                <div className="control_input">
                                    <select name="type" type="text" className="custom_input" value={this.state.car.type} onChange={this.handleChange} required>
                                        <option value="Sedan">Sedan</option>
                                        <option value="Coupe">Coupe</option>
                                        <option value="Vagon">Vagon</option>
                                        <option value="VAN">VAN</option>
                                        <option value="Hatchback">Hatchback</option>
                                    </select>
                                    <label className="custom_label">Type</label>
                                </div>
                                <div className="control_input">
                                    <input name="YoP" type="text" className="custom_input" value={this.state.car.YoP} onChange={this.handleChange} required />
                                    <label className="custom_label">Year of production</label>
                                </div>
                                <div className="control_input">
                                    <input name="course" type="text" className="custom_input" value={this.state.car.course} onChange={this.handleChange} required />
                                    <label className="custom_label">Course</label>
                                </div>
                                <div className="control_input">
                                    <input name="capacity" type="text" className="custom_input" value={this.state.car.capacity} onChange={this.handleChange} required />
                                    <label className="custom_label">Capacity</label>
                                </div>
                                <div className="control_input">
                                    <input name="hp" type="text" className="custom_input" value={this.state.car.hp} onChange={this.handleChange} required />
                                    <label className="custom_label">Horse power</label>
                                </div>
                                <div className="control_input">
                                    <select name="ft" type="text" className="custom_input" value={this.state.car.ft} onChange={this.handleChange} required>
                                        <option value="diesel">Diesel</option>
                                        <option value="lpg">LPG</option>
                                        <option value="petrol">Petrol</option>
                                    </select>
                                    <label className="custom_label">Fuel type</label>
                                </div>
                                <div className="control_input">
                                    <input name="transmission" type="text" className="custom_input" value={this.state.car.transmission} onChange={this.handleChange} required />
                                    <label className="custom_label">Transmission</label>
                                </div>
                                <div className="control_input">
                                    <input name="drive" type="text" className="custom_input" value={this.state.car.drive} onChange={this.handleChange} required />
                                    <label className="custom_label">Drive</label>
                                </div>
                            </div>
                            <div className="section__end" style={{textAlign:'center'}}>
                                <button className="btn btn-primary" onClick={this.saveCar}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}