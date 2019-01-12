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

    render(){
        const {firstName, lastName, profileImage} = this.props.accountInfo;
        const {isAdmin} = this.props;
        return(
            <div className="left_menu">
                <div className="left_menu__about">
                   <DisplayAvatar image={profileImage} size={96}/>
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
                        <li className="nav-column__item"><Link to="/users">Users</Link></li>
                        <li className="nav-column__item"><Link to="/cars">Cars</Link></li>
                        <li className="nav-column__item"><Link to="/mechanics">Mechanics</Link></li>
                        {isAdmin&&(<li className="nav-column__item"><Link to="/reports">Reports</Link></li>)}
                        <li onClick={this.props.logout} className="nav-column__item" style={{cursor:'pointer'}}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SidebarPanel)