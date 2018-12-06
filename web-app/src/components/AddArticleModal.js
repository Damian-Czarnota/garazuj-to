/**
 * Created by Damian.Czarnota on 2018-11-20.
 */

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as ArticleAPI from '../API/ArticleAPI';
import {convertFromRaw, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export default class AddArticleModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            title:'',
            shortDescription:''
        };
        this.addArticle = this.addArticle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    addArticle = () =>{
        ArticleAPI.add({title:this.state.title, shortDescription:this.state.shortDescription, content:JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))}).then(res =>{
            if(!res.status) {
                this.props.onClose();
                this.props.getArticles();
            }
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
                            <div className="control_input">
                                <textarea maxLength="500" name="shortDescription" type="text" className="custom_input" style={{width:99+'%',marginBottom:24+'px'}} value={this.state.shortDescription} onChange={this.handleChange} required />
                                <label className="custom_label">Short Description</label>
                            </div>
                            <Editor
                                editorState={this.state.editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
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