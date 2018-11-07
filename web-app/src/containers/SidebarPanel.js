/**
 * Created by Damian.Czarnota on 2018-10-23.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { accountInfo: state.userInfo };
};

class SidebarPanel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {firstName, lastName, authorities} = this.props.accountInfo;
        return(
            <div className="left_menu">
                <div className="left_menu__about">
                    <img src="https://www.comarch-cloud.com/jira/secure/useravatar?avatarId=10341&s=48" style={{width:64+'px',height:64+'px'}} className="circle-img" />
                    <p className="secondary-text">{firstName} {lastName}</p>
                    <p className="third-text">
                        {(JSON.stringify(authorities)).includes('[{"authority":"ROLE_ADMIN"}]')&&(
                            <span>Administrator</span>
                        )}
                        {!(JSON.stringify(authorities)).includes('[{"authority":"ROLE_ADMIN"}]')&&(
                            <span>User</span>
                        )}
                    </p>
                </div>
                <div className="left_menu__nav">
                    <ul className="nav-column">
                        <li className="nav-column__item"><Link to="/profile">About me...</Link></li>
                        <li className="nav-column__item">Guides</li>
                        <li className="nav-column__item">Users</li>
                        <li className="nav-column__item"><Link to="/cars">Cars</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SidebarPanel)