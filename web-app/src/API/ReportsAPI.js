/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const add = (id) =>
    fetch(`${URL}/reports`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': getToken()
    },
    body:JSON.stringify({articleId:id})
})
    .then(res => res);

export const getAll = () =>
    fetch(`${URL}/reports`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());