/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component} from 'react';
import * as ArticleAPI from '../API/ArticleAPI';
import * as ReportsAPI from '../API/ReportsAPI';
import Comments from '../components/Comments';
import draftToHtml from 'draftjs-to-html';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { isAdmin: state.isAdmin,
            userInfo: state.userInfo};
};

class Article extends Component {

    constructor(props){
        super(props);
        this.state={
            canDelete:false,
            article:''
        };
        this.deleteArticle = this.deleteArticle.bind(this);
    }
    componentDidMount(){
        const { articleHash } = this.props.match.params;
        ArticleAPI.get(articleHash).then(res =>{
            if(!res.status){
                this.setState({article:res});
                let {author} = res;
                if(author.id===this.props.userInfo.id||this.props.isAdmin)
                    this.setState({canDelete:true})
            }
        })
    }

    deleteArticle(id){
        ArticleAPI.deleteArticle(id).then(res =>{
            this.props.history.push("/guides");
        })
    }

    reportArticle(id){
        ReportsAPI.add(id).then(res =>{
            if(res.status===200)
                alert("Thanks for reporting this post!")
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
                                {this.state.article.content&&(
                                <div id="content-container" contentEditable='false' dangerouslySetInnerHTML={{ __html: `${draftToHtml(JSON.parse(this.state.article.content))}` }}>

                                </div>)}
                            </div>
                            {this.state.canDelete&&(
                                <button className="btn btn-danger text-right" onClick={(e) => this.deleteArticle(article.id)}>Delete</button>
                            )}
                            <button className="btn btn-danger text-right" onClick={(e) => this.reportArticle(article.id)}>Report</button>
                        </div>
                    </div>
                    <Comments comments={comments} label={'guide'} hash={this.state.article.id}/>
                </div>
            )
    }
}

export default connect(mapStateToProps)(Article);