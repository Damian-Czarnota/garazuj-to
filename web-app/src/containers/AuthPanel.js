/**
 * Created by Damian.Czarnota on 2018-10-18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const mapStateToProps = state => {
    return { register: state.register};
};

class AuthPanel extends Component{
    render(){
        return (
            <div className="sign_panel">
                <i className="fas fa-user-shield" />
                {!this.props.register&&(
                    <SignInForm updateUserInfo = {this.props.updateUserInfo} />
                )}
                {this.props.register&&(
                    <SignUpForm />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(AuthPanel)