import { headers,fileUploadHeader, URL } from './config';

export const addCar = (car) =>
    fetch (`${URL}/car`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(car)
    }).then(res => res);

export const getCars = () =>
    fetch (`${URL}/car`,{
        method:'GET',
        headers:headers
    }).then(res => res.json());

export const deleteCar = (index) =>
    fetch (`${URL}/car?index=${index}`,{
        method:'DELETE',
        headers:headers
    }).then(res => res);

export const editCar = (car) =>
    fetch (`${URL}/car`,{
        method:'PUT',
        headers:headers,
        body:JSON.stringify(car)
    }).then(res => res);
