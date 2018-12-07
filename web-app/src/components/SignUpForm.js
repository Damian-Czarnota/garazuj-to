/**
 * Created by Damian.Czarnota on 2018-11-06.
 */

import React, { Component } from 'react';
import * as AuthAPI from '../API/Auth';
import { register } from '../actions/index';
import { connect } from "react-redux";
import {showError, clearErrors} from "../utilities";

const mapDispatchToProps = dispatch  => {
    return { register: value => dispatch(register(value)) };
};

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                role: ['user']
            },
            registered:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleChange({target}){
        this.state.user[target.name] = target.value;
        this.setState({...this.state,user:this.state.user})
    }

    createAccount(e){
        clearErrors();
        let {user} = this.state;
        let validate = true;
        e.preventDefault();
        if(user.username===''){
            showError('username','This field is required');
            validate = false;
        }
        if(user.firstName===''){
            showError('firstName','This field is required');
            validate = false;
        }
        if(user.lastName===''){
            showError('lastName','This field is required');
            validate = false;
        }
        if(user.password===''||user.password.length<6){
            showError('password','Password should have at least 6 characters');
            validate = false;
        }
        if(user.email===''||!user.email.includes('@')){
            showError('email','Enter valid address email');
            validate = false;
        }
        if(validate)
            AuthAPI.createAccount(this.state.user).then(res =>{
                if(res.status===400)
                    showError('username','Already exists user with this username');
                if(res.status===200)
                    this.setState({registered:true})
            })
    }

    signIn(){
        this.props.register(false);
    }

    render(){
        return(
            <form className="sign_panel__form">
                {!this.state.registered&&(
            <div>
                <p style={{textAlign:'center'}}>Create new account</p>
                <label style={{display:'block'}}>
                    <input className="input-style" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
                    </label>
                    <label style={{display:'block'}}>
                    <input className="input-style" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    </label>
                    <label style={{display:'block'}}>
                    <input className="input-style" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required />
                    </label>
                    <label style={{display:'block'}}>
                    <input className="input-style" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required />
                    </label>
                    <label style={{display:'block'}}>
                    <input className="input-style" type="email" name="email" placeholder="E-Mail" value={this.state.email} onChange={this.handleChange} required />
                    </label>
                    <button  onClick={(e) =>this.createAccount(e)} style={{width:15+'vw'}} className="btn btn-primary">Send</button>
            </div>
                )}
                {this.state.registered&&(
                    <div>
                        <p>Thank you for register!</p>
                        <p><span className="link" onClick={this.signIn}>Sign in</span></p>
                    </div>
                )}
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm)