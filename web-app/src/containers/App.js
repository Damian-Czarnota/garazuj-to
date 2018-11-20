import React, { Component,Fragment } from 'react';
import './../App.scss';
import AuthPanel from './AuthPanel';
import SidebarPanel from './SidebarPanel';
import UserPanel from '../containers/UserPanel';
import UserCars from '../containers/UserCars';
import GuidesPanel from '../containers/GuidesPanel';
import Article from '../containers/Article';
import { connect } from "react-redux";
import { Route,withRouter  } from 'react-router-dom'
import { authenticate, setUserInfo,isAdmin } from '../actions/index';
import * as currentUserAPI from '../API/Me';
import * as UT from '../utilities';

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};

const mapDispatchToProps = dispatch => {
    return {authenticate: value => dispatch(authenticate(value)),
            setUserInfo: value => dispatch(setUserInfo(value)),
            isAdmin: value => dispatch(isAdmin(value))};
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true
        };
    }
    componentWillMount(){
        currentUserAPI.get().then(res =>{
            if(res.status) this.props.authenticate(false);
            else{
                this.props.setUserInfo(res);
                this.props.isAdmin(UT.checkIfAdmin(res));
                this.props.authenticate(true);
            }
            this.setState({loading:false})
        })
    }

  render() {
    return (
      <div className="App">
          {this.state.loading&&this.props.authenticated===null&&(
                <div className="loading_container">
                    <i className="fa fa-car-side"></i>
                    <span>Loading</span>
                </div>
          )}
          {!this.state.loading&&this.props.authenticated!=null&&(
          <Fragment>
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
                                <Route path="/guides" render={()=> (<GuidesPanel />)}
                                />
                                <Route path="/guide/:articleHash" component={Article}
                                />
                        </div>
                    </div>
                )}
          </Fragment>)}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
