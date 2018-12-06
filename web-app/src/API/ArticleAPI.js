/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const get = (hash) =>
    fetch(`${URL}/articles/${hash}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const add = (article) =>
    fetch(`${URL}/articles`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': getToken()
    }
})
    .then(res => res.json());