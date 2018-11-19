/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import Articles from '../components/Articles';

const articles = [
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZLso2Wf3b193QGPQ5GNYciemOQrAvZMllIDy1ARS2bDTFMpzzg',
        title:'Pierwszy artykuł',
        shortDescription:'Abecadło z nieba spadło, raz, dwa, trzy',
        hash:'4211'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZLso2Wf3b193QGPQ5GNYciemOQrAvZMllIDy1ARS2bDTFMpzzg',
        title:'Drugi artykuł',
    shortDescription:'Abecadło z nieba spadło, raz, dwa, trzy',
    hash:'421421412421'}];
export default class GuidesPanel extends Component {

    render(){
        return(
            <Articles articles={articles}/>
        )
    }

}