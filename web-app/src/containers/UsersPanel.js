/**
 * Created by Damian.Czarnota on 2018-12-21.
 */

import React, { Component } from 'react';
import * as usersAPI from '../API/UsersAPI';
import Grid from "../components/Grid";

export default class UsersPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[]
        };
        this.config = [
            { key: 'firstName', title: 'Name', type: 'text' },
            { key: 'lastName', title: 'Last name', type: 'text' },
            { key: 'cars', title: 'Number of cars', type: 'length' },
            {key:'action', button:[{
                type:'show-details',
                URL:'user'
            }]}
        ];
    }

    componentDidMount(){
       this.getUsers();
    }

    getUsers = () =>{
        usersAPI.getUsers().then(res =>{
            this.setState({users:res});
        })
    };


    render() {
        let {users} = this.state;
        return (
            <div className="user-cars_panel">
                <div className="header">
                    <h2 className="header__title">Users panel</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>Users in service</span>
                        </div>
                        <div className="section__middle">
                            {users.length > 0 && (
                                <Grid config={this.config} data={users} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
