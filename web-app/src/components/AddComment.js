/**
 * Created by Damian.Czarnota on 2018-11-21.
 */

import React, {Component} from 'react';
import DisplayAvatar from "./DisplayAvatar";


export default class AddComment extends Component{
    constructor(props){
        super(props);
        this.state={
            content:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    addComment(){
        this.setState({content:''});
        this.props.addComment(this.state);
    }


    render(){
        let {firstName, lastName, profileImage} = this.props.accountInfo;
        return(
            <div className="comment">
                <div className="comment__content">
                    <textarea className="custom-textarea" name="content" value={this.state.content} onChange={this.handleChange} placeholder="Your comment..."></textarea>
                </div>
                <div className="arrow-right">
                </div>
                <div className="comment__author">
                    <DisplayAvatar image={profileImage} size={64}/>
                    <p className="full-name">{firstName} {lastName}</p>
                    <button className="btn btn-primary" onClick={(e) => this.addComment()}>Save</button>
                </div>
            </div>
        )
    }
}