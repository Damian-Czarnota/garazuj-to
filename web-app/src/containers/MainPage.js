import React, {Component} from 'react';

export default class MainPage extends Component{
    render() {
        return(
            <div className="main-page_panel">
                <h1><i className="fas fa-hands-helping " />&nbsp;Hello <span className="primary-text">there</span>! </h1>
                <h2 className="third-text"><span className="primary-text">Garażuj.to</span> is web application which will help you manage your car!</h2>
            </div>
        )
    }
}
