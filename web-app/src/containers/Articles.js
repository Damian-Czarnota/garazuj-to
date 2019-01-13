/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AddArticle from '../containers/AddArticle';
import * as ArticleAPI from '../API/ArticleAPI';
import Searcher from '../components/Searcher';

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state={
            articles:[]
        };
        this.getArticles = this.getArticles.bind(this);
    }

    componentWillMount(){
        this.getArticles()
    }

    getArticles(query){
        query = query||'';
        ArticleAPI.getAll(query).then(res =>{
            if(!res.status){
                this.setState({articles:res})
            }
        })
    }

    render(){
        return(
            <div className="guides_panel">
                <div className="header">
                    <h2 className="header__title">Guides</h2>
                </div>
                <div className="content">
                    <div className="section">
                        <div className="section__header">
                            <span>&nbsp;</span>
                            <AddArticle getArticles={this.getArticles} />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__middle">
                            <Searcher getItems={this.getArticles}/>
                            {this.state.articles.length>0&&this.state.articles.map(article =>(<div key={article.id} className="article">
                                <div className="article__image">
                                    <i className="fas fa-book-open icon"></i>
                                </div>
                                <div className="article__description">
                                    <p className="title">{article.title}</p>
                                    <p className="content">{article.shortDescription} <Link className="link" to={`/guide/${article.id}`}>Read more...</Link></p>
                                </div>
                            </div>))}
                            {this.state.articles.length===0&&(
                                <div className="empty-grid">
                                    <i className="fab fa-connectdevelop"></i>
                                    <p>There is no guides.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


