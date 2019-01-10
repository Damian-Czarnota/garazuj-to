/**
 * Created by Damian.Czarnota on 2019-01-10.
 */

import React, {Component} from 'react';
import * as CarAPI from '../API/CarAPI';

export default class UploadPhoto extends  Component{

    uploadPhoto = (event) =>{
        let files =[];
        if(event.target) files = event.target.files;
        else if(event.srcElement) files = event.srcElement.files;
        if (files.nodeType === 3)
            files = files.parentNode;
        if (!files) {
            return;
        }
        CarAPI.uploadPhotos(this.props.id,files).then(res =>{
            if(res.status===200)
                console.log('elo');
        })
    };

    render(){
        return(
            <button className="circle circle-add-car circle-primary">
                <label><i className="fas fa-camera fa-lg"></i><input type="file" accept="image/*" multiple="multiple" onChange={(e) => this.uploadPhoto(e)} /></label>
            </button>
        )
    }
}