/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import React, {Component, Fragment} from 'react';
import AddArticleModal from '../components/AddArticleModal';

const ModalTrigger = ({onOpen}) => <button className="circle circle-add-car circle-primary" onClick={onOpen}><i className="fas fa-plus"></i></button>;


export default class AddArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen:false,
            title:''
        };
        this.onOpen = this.onOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

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
                    <AddArticleModal getArticles={this.props.getArticles} onClose={this.onClose}/>
                )}
            </Fragment>
        );
    }
}