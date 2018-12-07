/**
 * Created by Damian.Czarnota on 2018-12-07.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const getPostComments = (id) =>
    fetch(`${URL}/comment/post/${id}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const addPostComment = (id,content) =>
    fetch(`${URL}/comment/post/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(content)
    })
        .then(res => res);

export const deleteComment = (commentId) =>
    fetch(`${URL}/comment/${commentId}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res);