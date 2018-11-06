import React, { Component } from 'react';
import './../App.scss';
import AuthPanel from './AuthPanel';
import SidebarPanel from './SidebarPanel';
import UserPanel from '../containers/UserPanel';
import UserCars from '../containers/UserCars';
import { connect } from "react-redux";
import { Route,withRouter  } from 'react-router-dom'
import { authenticate } from '../actions/index';

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

const mapDispatchToProps = dispatch => {
    return {authenticate: value => dispatch(authenticate(value))};
};

class App extends Component {
  constructor(props){
    super(props);
  }

    componentWillMount(){
        if(sessionStorage.getItem('Authentication')){
            this.props.authenticate(true);
        }
    }

  render() {
    return (
      <div className="App">
        {!this.props.authenticated&&(
            <AuthPanel />
        )}
        {this.props.authenticated&&(
            <div className="app_container">
                <SidebarPanel />
                <div className="components_container">
                        <Route exact path="/" render={()=> (<div></div>)}
                        />
                        <Route path="/profile" render={()=> (<UserPanel />)}
                        />
                        <Route path="/cars" render={()=> (<UserCars />)}
                        />
                </div>
            </div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
