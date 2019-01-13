/**
 * Created by Damian.Czarnota on 2018-12-13.
 */

import React, { Component } from 'react';
import * as usersAPI from '../API/UsersAPI';
import DisplayAvatar from '../components/DisplayAvatar';
import {checkIfAdmin} from '../utilities';
import Grid from '../components/Grid';
import CarSquare from '../components/CarSquare';

export default class UserDetailsPanel extends Component {

    constructor(props){
        super(props);
        this.state={
            userInfo:{}
        };
        this.config=[{key:'date', type:'date'},
        {key:'description', type:'text'},
        {key:'price', type:'number'}
        ];
    };
    componentDidMount(){
        usersAPI.getUser(this.props.match.params.userID).then(res =>{
            this.setState({userInfo:res})
        })
    };

    render(){
        let {userInfo} = this.state;
        return(
            <div className="user_panel">
                <div className="header">
                    <h2 className="header__title">User profile</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>{userInfo.firstName} {userInfo.lastName}</span>
                        </div>
                        <div className="section__middle">
                            <div className="avatar_section">
                                <DisplayAvatar image={userInfo.profileImage} size={96}/>
                            </div>
                            <div className="details_section">
                                <div className="form_group form_group-dark">
                                    <label className="">Username:&nbsp;</label>
                                    <p>{userInfo.username}</p>
                                </div>
                                <div className="form_group form_group-dark">
                                    <label className="">Role:&nbsp;</label>
                                    {checkIfAdmin(userInfo)?(
                                        <p>Administrator</p>
                                    ):
                                        <p>User</p>
                                    }
                                </div>
                                <div className="form_group form_group-dark">
                                    <label className="">First name:&nbsp;</label>
                                    <p>{userInfo.firstName}</p>
                                </div>
                                <div className="form_group form_group-dark">
                                    <label className="">Last name:&nbsp;</label>
                                    <p>{userInfo.lastName}</p>
                                </div>
                                <div className="form_group form_group-dark">
                                    <label className="">E-mail:&nbsp;</label>
                                    <p>{userInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__header">
                            <span>Payments history</span>
                        </div>
                        <div>
                            <div className="details_section">
                                {userInfo.history&&(<Grid config={this.config} data={userInfo.history} noHeaders={true}/>)}
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__header">
                            <span>Cars</span>
                        </div>
                        <div className="section__middle">
                            <div className="details_section d-wrap">
                                {userInfo.cars&&userInfo.cars.map((car,index) =>(
                                    <CarSquare car={car} key={index}></CarSquare>
                                ))}
                                {userInfo.cars&&userInfo.cars.length === 0 && (
                                    <div className="empty-grid">
                                        <i className="fab fa-connectdevelop"></i>
                                        <p>User doesn't have cars.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}