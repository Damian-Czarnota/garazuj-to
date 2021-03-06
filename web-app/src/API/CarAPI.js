import { URL } from './config';
import {getToken} from '../actions/index';

export const addCar = (car) =>
    fetch (`${URL}/car`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(car)
    }).then(res => res);

export const getCars = (query) =>
    fetch (`${URL}/car${query}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res.json());

export const deleteCar = (index) =>
    fetch (`${URL}/car?id=${index}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res);

export const editCar = (car) =>
    fetch (`${URL}/car`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(car)
    }).then(res => res);

export const getCar = (id) =>
    fetch (`${URL}/car/${id}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    }).then(res => res.json());

export const uploadPhotos = (id, photos) =>{
    let fd = new FormData();
    for(let i=0;i<photos.length;i++){
        fd.append('photos', new Blob([(photos[i])], {
            type: photos[i].type
        }),photos[i].name);
    }
    return fetch (`${URL}/car/${id}`,{
        method:'PATCH',
        headers:{
            'Authorization': getToken()
        },
        body:fd
    })
        .then(res => res);
};