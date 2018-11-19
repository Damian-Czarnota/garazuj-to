/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component, Fragment} from 'react';
import {createPortal} from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ModalTrigger = ({onOpen}) => <button className="circle circle-add-car circle-primary" onClick={onOpen}><i className="fas fa-plus"></i></button>;
const ModalContent = ({onClose,title,handleChange,onEditorStateChange,editorState, addArticle}) => {
    return createPortal(
        <aside className="cover">
            <div className="modal">
                <div className="modal__header">
                    <h3 className="title">Add guide</h3>
                    <button className="modal__close circle circle-add-car circle-white" aria-label="Close Modal" onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal__body">
                    <form>
                        <div className="control_input">
                            <input name="title" type="text" className="custom_input" value={title} onChange={handleChange} required />
                            <label className="custom_label">Title</label>
                        </div>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </form>
                </div>
                <div className="modal__footer">
                    <button className="btn btn-primary" onClick={addArticle}>Save</button>
                </div>
            </div>
        </aside>,
        document.body
    );
};
export default class AddArticleModal extends Component {
    constructor(){
        super();
        this.state = {
            isOpen:false,
            title:'',
            editorState: EditorState.createEmpty()
        };
        this.onOpen = this.onOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.addArticle = this.addArticle.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    addArticle = () =>{
        console.log(this.state.editorState);
    };

    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
    };
    render() {
        const { isOpen } = this.state;
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} />
                {isOpen&&(
                    <ModalContent title={this.state.title}
                                  onEditorStateChange={this.onEditorStateChange}
                                  editorState={this.state.editorState}
                                  handleChange={this.handleChange}
                                  onClose={this.onClose}
                                  addArticle={this.addArticle}/>
                )}
            </Fragment>
        );
    }
}