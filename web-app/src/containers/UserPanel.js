/**
 * Created by Damian.Czarnota on 2018-10-24.
 */

import React, { Component } from 'react';
import AddCarForm from '../components/AddCarForm';
import { connect } from "react-redux";
import * as currentUserAPI from '../API/Me';
import { setUserInfo,isAdmin } from '../actions/index';

const mapDispatchToPtops = dispatch =>{
    return { setUserInfo:value => dispatch(setUserInfo(value))}
};
const mapStateToProps = state => {
    return { accountInfo: state.userInfo };
};

class UserPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            cars:[],
            carBoxes:[{visible:true}]
        };
        this.cars=[];
        this.handleChange = this.handleChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.changeAvatar = this.changeAvatar.bind(this);
    };

    componentWillMount(){
        const {firstName, lastName, email} = this.props.accountInfo;
        this.setState({firstName:firstName,lastName:lastName,email:email});
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
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

    saveUser = () =>{
        currentUserAPI.edit({firstName:this.state.firstName,lastName:this.state.lastName}).then(
            res =>{
                this.props.setUserInfo(res);
        })
    };

    changeAvatar = (event) =>{
        let files;
        if(event.target) files = event.target.files;
        else if(event.srcElement) files = event.srcElement.files;
        if (files.nodeType === 3)
            files = files.parentNode;
        if (!files) {
            return;
        }
        currentUserAPI.change(files).then(
            res =>{
                console.log(res);
            }
        )
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
                                <img src="https://www.comarch-cloud.com/jira/secure/useravatar?avatarId=10341&s=48" alt="Your avatar" style={{width:96+'px',height:96+'px'}} className="circle-img" />
                                <button className="btn btn-primary">
                                    <label>Change<input type="file" accept="image/*" onChange={(e) => this.changeAvatar(e)} /></label>
                                </button>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                            <div className="details_section">
                                <div className="control_input">
                                    <input name="firstName" type="text" className="custom_input" value={this.state.firstName} onChange={this.handleChange} />
                                    <label className="custom_label">First name</label>
                                </div>
                                <div className="control_input">
                                    <input name="lastName" type="text" className="custom_input" value={this.state.lastName} onChange={this.handleChange} formNoValidate />
                                    <label className="custom_label">Last name</label>
                                </div>
                                <div className="control_input">
                                    <input name="email" type="text" className="custom_input" value={this.state.email} formNoValidate disabled/>
                                    <label className="custom_label-active">E-mail</label>
                                </div>
                                <div className="section__end">
                                        <button className="btn btn-primary" onClick={this.saveUser}>Save</button>
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

export default connect(mapStateToProps,mapDispatchToPtops)(UserPanel);