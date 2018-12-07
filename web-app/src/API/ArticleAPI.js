/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const get = (id) =>
    fetch(`${URL}/post/${id}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const add = (article) =>
    fetch(`${URL}/post`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': getToken()
    },
    body:JSON.stringify(article)
})
    .then(res => res.json());

export const getAll = () =>
    fetch(`${URL}/post`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const deleteArticle = (id) =>
    fetch(`${URL}/post?id=${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res);

export const addComment = (id,content) =>
    fetch(`${URL}/post/${id}/comments`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(content)
    })
        .then(res => res);

export const getComments = (id) =>
    fetch(`${URL}/post/${id}/comments`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const deleteComment = (postId,commentId) =>
    fetch(`${URL}/post/${postId}/comments?id=${commentId}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res);