/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import * as ArticleAPI from '../API/ArticleAPI';

export default class Article extends Component {

    constructor(props){
        super(props);
        this.state={article:{
            title:'Pierwszy artykuł',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZLso2Wf3b193QGPQ5GNYciemOQrAvZMllIDy1ARS2bDTFMpzzg',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            comments:[]
        }}
    }
    componentDidMount(){
        const { articleHash } = this.props.match.params;
        ArticleAPI.get(articleHash).then(res =>{
            if(!res.status){
                this.setState({article:res});
            }
        })
    }
    render(){
        console.log(this.state);
        let {article} = this.state;
        return(
            <div className="guides_panel">
                <div className="header">
                    <h2 className="header__title">Guides</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>{article.title}</span>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__middle">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}