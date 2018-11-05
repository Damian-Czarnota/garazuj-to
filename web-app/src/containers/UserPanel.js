/**
 * Created by Damian.Czarnota on 2018-10-24.
 */

import React, { Component } from 'react';
import AddCarForm from '../components/AddCarForm';

const initialState = {firstName:'Abc',lastName:'',email:''};

export default class UserPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            initialState:initialState,
            cars:[],
            carBoxes:[{visible:true}]
        };
        this.cars=[];
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    saveCar = (car) =>{
        this.cars.push(car);
        this.setState({cars:this.cars});
    };

    addCar = () =>{
        this.state.carBoxes.push({visible:true});
        this.setState({carBoxes:this.state.carBoxes});
    };

    deleteCar = (index) =>{
        this.state.carBoxes.splice(index,1);
        this.cars.splice(index,1);
        this.setState({carBoxes:this.state.carBoxes});
    };

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
                            <button className="circle circle-add-car circle-primary" onClick={this.addCar}><i className="fas fa-plus"></i></button>
                        </div>
                        {this.state.carBoxes.map((box,key)=>(
                            <AddCarForm key={key} saveCar={this.saveCar} deleteCar={this.deleteCar} id={key}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}