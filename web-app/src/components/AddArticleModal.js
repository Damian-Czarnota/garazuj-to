/**
 * Created by Damian.Czarnota on 2018-11-20.
 */

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as ArticleAPI from '../API/ArticleAPI';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default class AddArticleModal extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
            title:''
        };
        this.addArticle = this.addArticle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onContentStateChange: Function = (contentState) => {
        this.setState({
            contentState
        });
    };

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    addArticle = () =>{
        ArticleAPI.add(this.state).then(res =>{
            this.props.onClose();
        })
    };

    render() {
        return createPortal(
            <aside className="cover">
                <div className="modal">
                    <div className="modal__header">
                        <h3 className="title">Add guide</h3>
                        <button className="modal__close circle circle-add-car circle-white" aria-label="Close Modal" onClick={this.props.onClose}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <div className="modal__body">
                        <form>
                            <div className="control_input">
                                <input name="title" type="text" className="custom_input" style={{width:99+'%',marginBottom:24+'px'}} value={this.state.title} onChange={this.handleChange} required />
                                <label className="custom_label">Title</label>
                            </div>
                            <Editor
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onContentStateChange={this.onContentStateChange}
                            />
                        </form>
                    </div>
                    <div className="modal__footer">
                        <button className="btn btn-primary" onClick={this.addArticle}>Save</button>
                    </div>
                </div>
            </aside>,
            document.body
        );
    };
}