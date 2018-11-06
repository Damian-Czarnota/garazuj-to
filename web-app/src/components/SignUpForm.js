/**
 * Created by Damian.Czarnota on 2018-11-06.
 */

import React, { Component } from 'react';
import * as AuthAPI from '../API/Auth';
import { register } from '../actions/index';
import { connect } from "react-redux";

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
                role: ['admin']
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
        e.preventDefault();
        AuthAPI.createAccount(this.state.user).then(res =>{
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
                    <input className="input-style" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}required />
                    </label>
                    <label style={{display:'block'}}>
                    <input className="input-style" type="email" name="email" placeholder="E-Mail" value={this.state.email} onChange={this.handleChange} required />
                    </label>
                    <button type="send" onClick={(e) =>this.createAccount(e)} style={{width:15+'vw'}} className="btn btn-primary">Send</button>
            </div>
                )}
                {this.state.registered&&(
                    <div>
                        <p>Thank you for register!</p>
                        <p><a style={{color:'#2dc9ff'}} onClick={this.signIn}>Sign in</a></p>
                    </div>
                )}
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm)