/**
 * Created by Damian.Czarnota on 2018-11-21.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment';
import { connect } from "react-redux";
import DisplayAvatar from "./DisplayAvatar";
import * as CommentAPI from '../API/CommentsAPI';
import { dataFromTimestampToString } from '../utilities';
const mapStateToProps = state => {
    return { accountInfo: state.userInfo,
            isAdmin: state.isAdmin};
};

class Comments extends Component{
    static propTypes = {
        comments: PropTypes.array
    };
    constructor(props){
        super(props);
        this.state={
            comments:[]
        };
        this.getComments = this.getComments.bind(this);
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            comments: nextProps.comments
        });
    }
    getComments = () =>{
        const {label,hash} = this.props;
        if(label==='guide'){
            CommentAPI.getPostComments(hash).then(res =>{
            this.setState({comments:res})
        })
        }
        else if(label==='car'){
            CommentAPI.getCarComments(hash).then(res =>{
        this.setState({comments:res})
        })
        }
    };

    addComment = (content) =>{
        const {label,hash} = this.props;
        if(label==='guide'){
            CommentAPI.addPostComment(hash,content).then(res =>{
            if(res.status===200)
                this.getComments();
        })
        }
        else if(label==='car'){
            CommentAPI.addCarComment(hash,content).then(res =>{
        this.getComments();
        })
        }
    };

    deleteComment = (commentId) =>{
        CommentAPI.deleteComment(commentId).then(res =>{
            if(res.status===200)
                this.getComments();
        })
    };
    render(){
        let {comments} = this.state;
        let {isAdmin,accountInfo} = this.props;
        return(
        <div className="content">
            <div className="section">
                <div className="section__header">
                    <span>Comments</span>
                </div>
            </div>
            <div className="section">
                <div className="section__middle">
                    {comments&&comments.map(comment =>(
                        <div className="comment" key={comment.id}>
                            <div className="comment__author">
                                <DisplayAvatar image={comment.author.profileImage} size={64}/>
                                <p className="full-name">{comment.author.firstName} {comment.author.lastName}</p>
                            </div>
                            <div className="arrow-left">
                            </div>
                            <div className="comment__content">
                                <p className="third-text m-0">{comment.content}</p>
                                <div className="row-space-between">
                                    {comment.createDataTime&&(<p className="data-text">{dataFromTimestampToString(comment.createDataTime)}</p>)}
                                    {(isAdmin||accountInfo.id===comment.author.id)&&(
                                        <button className="btn btn-danger m-0" onClick={(e) =>{this.deleteComment(comment.id)}}>Delete</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <AddComment accountInfo={this.props.accountInfo} getComments={this.getComments} addComment={this.addComment} label={this.props.label}/>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps)(Comments);