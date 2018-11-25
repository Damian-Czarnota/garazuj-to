/**
 * Created by Damian.Czarnota on 2018-10-23.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import DisplayAvatar from "../components/DisplayAvatar";

const mapStateToProps = state => {
    return { accountInfo: state.userInfo,
            isAdmin: state.isAdmin};
};

class SidebarPanel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {firstName, lastName, profileImage} = this.props.accountInfo;
        const {isAdmin} = this.props;
        return(
            <div className="left_menu">
                <div className="left_menu__about">
                   <DisplayAvatar profileImage={profileImage} size={96}/>
                    <p className="secondary-text">{firstName} {lastName}</p>
                    <p className="third-text">
                        {isAdmin&&(
                            <span>Administrator</span>
                        )}
                        {!isAdmin&&(
                            <span>User</span>
                        )}
                    </p>
                </div>
                <div className="left_menu__nav">
                    <ul className="nav-column">
                        <li className="nav-column__item"><Link to="/profile">Profile</Link></li>
                        <li className="nav-column__item"><Link to="/guides">Guides</Link></li>
                        <li className="nav-column__item">Users</li>
                        <li className="nav-column__item"><Link to="/cars">Cars</Link></li>
                        <li onClick={this.props.logout} className="nav-column__item">Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SidebarPanel)