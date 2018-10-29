import React, { Component } from 'react';
import './../App.scss';
import SignInPanel from '../components/SignInPanel';
import SidebarPanel from '../components/SidebarPanel';
import UserPanel from '../containers/UserPanel';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        {!this.props.authenticated&&(
            <SignInPanel />
        )}
        {this.props.authenticated&&(
            <div className="app_container">
                <SidebarPanel />
                <div className="components_container">
                    <UserPanel />
                </div>
            </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)
