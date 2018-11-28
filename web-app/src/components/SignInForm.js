/**
 * Created by Damian.Czarnota on 2018-11-06.
 */

import React, { Component } from 'react';
import { register,authenticate,setUserInfo, isAdmin } from '../actions/index';
import { connect } from "react-redux";
import * as AuthAPI from '../API/Auth';
import * as UT from '../utilities';
import {showError,clearErrors} from "../utilities";

const mapDispatchToProps = dispatch  => {
    return { register: value => dispatch(register(value)),
            authenticate: value => dispatch(authenticate(value)),
            setUserInfo:value => dispatch(setUserInfo(value)),
            isAdmin: value => dispatch(isAdmin(value))};
};

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleChange({target}){
        this.setState({[target.name]: target.value})
    }

    register(){
        this.props.register(true);
    }

    logIn(e){
        e.preventDefault();
        clearErrors();
        let validate = true;
        if(this.state.username===''){
            showError('username','This field is required');
            validate = false;
        }
        if(this.state.password===''||this.state.password.length<6){
            showError('password','This field should have at least 6 characters');
            validate = false;
        }
        if(validate)
            AuthAPI.logIn(this.state).then(
                res =>{
                    if(res.status){
                        showError('username');
                        showError('password','Bad username or password');
                    }
                    if(res.authorities) {
                        let {userDetails} = res;
                        sessionStorage.setItem('Authorization',res.token);
                        this.props.authenticate(true);
                        this.props.isAdmin(UT.checkIfAdmin(userDetails.user));
                        this.props.setUserInfo(userDetails.user);
                    }
                }
            )
    }

    render(){
        return(
            <form className="sign_panel__form">
                <p style={{textAlign:'center'}}>Log in to your account</p>
                <label style={{display:'block'}}>
                    <input className="input-style" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label style={{display:'block'}}>
                    <input className="input-style" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <p className="m-0" style={{textAlign:'right'}}>
                    <a href="/reset" className="link" style={{fontSize:12+'px'}}>Forgot password?</a>
                </p>
                <button type="send" onClick={(e) => this.logIn(e)} style={{width:15+'vw'}} className="btn btn-primary">Send</button>
                <p>Need an account? <span className="link" onClick={this.register}>Sign up</span></p>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignInForm)