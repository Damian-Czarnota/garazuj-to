/**
 * Created by Damian.Czarnota on 2018-11-07.
 */

import { headers,fileUploadHeader, URL } from './config';

export const get = () =>
    fetch(`${URL}/me`,{
        method:'GET',
        headers:headers
    })
        .then(res => res.json());

export const edit = (data) =>
    fetch(`${URL}/me`,{
        method:'PUT',
        headers:headers,
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
        headers:fileUploadHeader,
        body:fd
    })
        .then(res => res);
};

export const addCar = (car) =>
    fetch (`${URL}/me/car`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(car)
    }).then(res => res);

export const getCars = () =>
    fetch (`${URL}/me/car`,{
        method:'GET',
        headers:headers
    }).then(res => res.json());

export const deleteAvatar = () =>
    fetch (`${URL}/me`,{
        method:'DELETE',
        headers:headers
    }).then(res => res);