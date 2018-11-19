/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AddArticleModal from '../components/AddArticleModal';

export default class Articles extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };
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
                            <AddArticleModal />
                        </div>
                    </div>
                    <div className="section">
                        <div className="section__middle">
                            {this.props.articles&&this.props.articles.map(article =>(<div key={article.hash} className="article">
                                <div className="article__image">
                                    <img alt={article.title} src={article.img} />
                                </div>
                                <div className="article__description">
                                    <p className="title">{article.title}</p>
                                    <p className="content">{article.shortDescription} <Link className="link" to={`/guide/${article.hash}`}>Read more...</Link></p>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


