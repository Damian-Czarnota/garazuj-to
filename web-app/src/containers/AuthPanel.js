/**
 * Created by Damian.Czarnota on 2018-10-18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { authenticate } from '../actions/index';
import * as Auth from '../API/Auth';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const mapStateToProps = state => {
    return { authenticated: state.authenticated,
             register: state.register};
};

const mapDispatchToProps = dispatch  => {
    return { authenticate: value => dispatch(authenticate(value)) };
};

class AuthPanel extends Component{
    constructor(props){
        super(props);
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
                {!this.props.register&&(
                    <SignInForm />
                )}
                {this.props.register&&(
                    <SignUpForm />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel)