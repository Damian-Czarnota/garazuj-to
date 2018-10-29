/**
 * Created by Damian.Czarnota on 2018-10-18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { authenticate } from '../actions/index';
import * as Auth from '../API/Auth';

const initialState = {username:'',password:''};

const mapStateToProps = state => {
    return { authenticated: state.authenticated };
};

const mapDispatchToProps = dispatch  => {
    return { authenticate: value => dispatch(authenticate(value)) };
};

class SignInPanel extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    logIn(event){
        event.preventDefault();
        this.props.authenticate(true);
        this.reset();
    }

    reset(){
        this.setState(initialState);
    }

    logOut(){
        Auth.logout().then(resp =>{
            this.props.authenticate(false)
        },
        error =>{
            console.log('error');
        })
    }

    render(){
        return (
            <div className="sign_panel">
                <i className="fas fa-user-shield" />
                <form className="sign_panel__form">
                    <p style={{textAlign:'center'}}>Log in to your account</p>
                    <label style={{display:'block'}}>
                        <input className="input-style" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label style={{display:'block'}}>
                        <input className="input-style" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <div>
                        <a style={{float:'right', fontSize:12+'px',color:'#2dc9ff'}}>Forgot password?</a>
                    </div>
                    <button type="send" onClick={this.logIn} className="log-in-button">Send</button>
                    <p>Need an account? <a style={{color:'#2dc9ff'}}>Sign in</a></p>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPanel)