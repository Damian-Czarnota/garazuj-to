/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import * as ArticleAPI from '../API/ArticleAPI';
import Comments from '../components/Comments';
import draftToHtml from 'draftjs-to-html';
import { EditorState,convertToRaw} from 'draft-js';

export default class Article extends Component {

    constructor(props){
        super(props);
        this.state={article: {
            editorState:EditorState.createEmpty(),
            title:'',
            comments:[{
                hash:'2321412',
                firstName:'Damian',
                lastName:'Czarnota',
                content:'Super kozacki artykuł!',
                createDataTime:new Date().toDateString()
            }]
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
        let {article} = this.state;
        let {comments} = article;
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
                            {this.state.article.editorState&&(
                            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: `${draftToHtml(convertToRaw(this.state.article.editorState.getCurrentContent()))}` }}>

                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>Comments</span>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__middle">
                            <Comments comments={comments} label={'guide'} hash={this.state.article.hash}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}