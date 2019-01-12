import React, { Component } from 'react';
import Grid from '../components/Grid';
import * as ReportsAPI from '../API/ReportsAPI';

class Reports extends Component{
    constructor(props){
        super(props);
        this.state={
            reports:[]
        }
        this.config = [
            { key: 'id', title: "Raport's ID", type: 'text' },
            { key: 'articleID', title: 'Article id', type: 'text' },
            {key:'action', button:[{
                    type:'guide-link',
                    URL:'guide'
                }]}
        ];
    }
    getReports = () =>{
        ReportsAPI.getAll().then(res =>{
            if(res)
                this.setState({reports:res})
        })
    };

    componentWillMount() {
        this.getReports();
    }

    render(){
        return (
            <div className="reports_panel">
                <div className="header">
                    <h2 className="header__title">Reports</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>Posts reported by users</span>
                        </div>
                        <div className="section__middle">
                            {this.state.reports.length > 0 && (
                                <Grid config={this.config} data={this.state.reports} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Reports)