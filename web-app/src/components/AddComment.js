/**
 * Created by Damian.Czarnota on 2018-11-21.
 */

import React, {Component} from 'react';


export default class AddComment extends Component{
    constructor(){
        super();
        this.state={
            content:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    addComment = () =>{
      //TODO
        //SAVE COMMENT TO API
    };

    render(){
        return(
            <div className="comment">
                <div className="comment__content">
                    <textarea className="custom-textarea" onChange={this.handleChange} placeholder="Your comment..."></textarea>
                </div>
                <div className="arrow-right">
                </div>
                <div className="comment__author">
                    <img src={process.env.PUBLIC_URL + '/img/custom_avatar.png'} alt="Your avatar" style={{width:64+'px',height:64+'px'}} className="circle-img" />
                    <p className="full-name">Damian Czarnota</p>
                    <button className="btn btn-primary" onClick={this.addComment}>Save</button>
                </div>
            </div>
        )
    }
}