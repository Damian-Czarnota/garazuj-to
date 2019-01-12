import React, { Component,Fragment } from 'react';
import './../App.scss';
import AuthPanel from './AuthPanel';
import SidebarPanel from './SidebarPanel';
import UserPanel from '../containers/UserPanel';
import UserCars from '../containers/UserCars';
import Articles from '../containers/Articles';
import Article from '../containers/Article';
import { connect } from "react-redux";
import { Route,withRouter  } from 'react-router-dom'
import { authenticate, setUserInfo,isAdmin } from '../actions/index';
import * as currentUserAPI from '../API/Me';
import * as UT from '../utilities';
import UsersPanel from '../containers/UsersPanel';
import UserDetailsPanel from '../containers/UserDetailsPanel';
import CarPanel from '../containers/CarPanel';
import Mechanics from '../containers/Mechanics';
import Reports from '../containers/Reports';

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
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.logout = this.logout.bind(this);
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

    updateUserInfo = () =>{
        currentUserAPI.get().then(res =>{
                this.props.setUserInfo(res);
        })
    };

    logout=() =>{
      sessionStorage.removeItem('Authorization');
      this.props.authenticate(false);
    };
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
                        <SidebarPanel logout={this.logout}/>
                        <div className="components_container">
                                <Route exact path="/" render={()=> (<div></div>)}
                                />
                                <Route path="/profile" render={()=> (<UserPanel updateUserInfo={this.updateUserInfo}/>)}
                                />
                                <Route path="/cars" render={()=> (<UserCars />)}
                                />
                                <Route path="/users" render={()=> (<UsersPanel />)}
                                />
                                <Route path="/guides" render={()=> (<Articles />)}
                                />
                                <Route path="/guide/:articleHash" component={Article}
                                />
                                <Route path="/user/:userID" component={UserDetailsPanel}
                                />
                                <Route path="/car/:carID" component={CarPanel}
                                />
                                <Route path="/mechanics" component={Mechanics}
                                />
                                <Route path="/reports" component={Reports}
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
