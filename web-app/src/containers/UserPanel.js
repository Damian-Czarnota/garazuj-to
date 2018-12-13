/**
 * Created by Damian.Czarnota on 2018-10-24.
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import * as currentUserAPI from '../API/Me';
import { setUserInfo } from '../actions/index';
import DisplayAvatar from "../components/DisplayAvatar";

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
            profileImage:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.changeAvatar = this.changeAvatar.bind(this);
    };

    componentDidMount(){
        const {firstName, lastName, email, profileImage} = this.props.accountInfo;
        this.setState({firstName:firstName,lastName:lastName,email:email, profileImage:profileImage});
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    saveUser = () =>{
        currentUserAPI.edit({firstName:this.state.firstName,lastName:this.state.lastName}).then(
            res =>{
                if(res.status===200)
                    this.props.updateUserInfo();
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
                if(res.status===200)
                    this.props.updateUserInfo();
            }
        )
    };

    deleteAvatar = () =>{
        currentUserAPI.deleteAvatar().then(res =>{
            if(res.status===200)
                this.props.updateUserInfo();
        })
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
                               <DisplayAvatar image={this.props.accountInfo.profileImage} size={96}/>
                                <button className="btn btn-primary">
                                    <label>Change<input type="file" accept="image/*" onChange={(e) => this.changeAvatar(e)} /></label>
                                </button>
                                <button onClick={this.deleteAvatar} className="btn btn-danger">
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
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToPtops)(UserPanel);