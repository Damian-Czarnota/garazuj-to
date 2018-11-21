/**
 * Created by Damian.Czarnota on 2018-11-21.
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment';

export default class Comments extends Component{
    static propTypes = {
        comments: PropTypes.array.isRequired
    };
    constructor(props){
        super(props);
    }

    render(){
        let {comments} = this.props;
        return(
            <Fragment>
                {comments&&comments.map(comment =>(
                    <div className="comment" key={comment.hash}>
                        <div className="comment__author">
                            <img src={process.env.PUBLIC_URL + '/img/custom_avatar.png'} alt="Your avatar" style={{width:64+'px',height:64+'px'}} className="circle-img" />
                            <p className="full-name">{comment.firstName} {comment.lastName}</p>
                        </div>
                        <div className="arrow-left">
                        </div>
                        <div className="comment__content">
                            <p className="third-text m-0">{comment.content}</p>
                            <p className="data-text">{comment.createDataTime}</p>
                        </div>
                    </div>
                ))}
                <AddComment />
            </Fragment>
        )
    }
}