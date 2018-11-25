/**
 * Created by Damian.Czarnota on 2018-11-21.
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment';
import { connect } from "react-redux";
import DisplayAvatar from "./DisplayAvatar";

const mapStateToProps = state => {
    return { accountInfo: state.userInfo };
};

class Comments extends Component{
    static propTypes = {
        comments: PropTypes.array.isRequired
    };
    constructor(props){
        super(props);
        this.state={
            comments:this.props.comments
        };
        this.getComments = this.getComments.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    getComments = () =>{
        const {label,hash} = this.props;
        //if(label==='guide'){
        //CommentsAPI.getArticleComments(hash).then(res =>{
        //this.setState({comments:res})
        //}
        //else if(label==='car'){
        //CarAPI.getCarComments(hash).then(res =>{
        //this.setState({comments:res})
        //}
    };

    addComment = (content) =>{
        const {label,hash} = this.props;
        //if(label==='guide'){
        //CommentsAPI.addArticleComment(hash,content).then(res =>{
        //this.getComments();
        //}
        //else if(label==='car'){
        //CarAPI.addCarComments(hash,content).then(res =>{
        //this.getComments();
        //}
    };
    render(){
        let {comments} = this.state;
        return(
            <Fragment>
                {comments&&comments.map(comment =>(
                    <div className="comment" key={comment.hash}>
                        <div className="comment__author">
                            <DisplayAvatar profileImage={comment.author.profileImage} size={64}/>
                            <p className="full-name">{comment.author.firstName} {comment.author.lastName}</p>
                        </div>
                        <div className="arrow-left">
                        </div>
                        <div className="comment__content">
                            <p className="third-text m-0">{comment.content}</p>
                            <p className="data-text">{comment.createDataTime}</p>
                        </div>
                    </div>
                ))}
                <AddComment accountInfo={this.props.accountInfo} getComments={this.getComments} addComment={this.addComment} label={this.props.label}/>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(Comments);