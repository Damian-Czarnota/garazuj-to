/**
 * Created by Damian.Czarnota on 2018-11-07.
 */

import { URL } from './config';
import {getToken} from '../actions/index';

export const get = () =>
    fetch(`${URL}/me`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json());

export const edit = (data) =>
    fetch(`${URL}/me`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(data)
    })
        .then(res => res);

export const change = (file) =>{
    let fd = new FormData();
    fd.append('file', new Blob([(file[0])], {
        type: file[0].type
    }),file[0].name);
    return fetch(`${URL}/me`,{
        method:'POST',
        body:fd
    })
        .then(res => res);
};

export const deleteAvatar = () =>
    fetch (`${URL}/me`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res);

