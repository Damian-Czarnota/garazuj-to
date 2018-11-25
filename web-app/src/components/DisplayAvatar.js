import React, {Component, Fragment} from 'react';

export default class DisplayAvatar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {profileImage,size} = this.props;
        return(
            <Fragment>
                {!profileImage&&(
                    <i className="fa fa-user default-avatar" style={{fontSize:size+'px'}}></i>
                )}
                {profileImage&&(
                    <img src={`data:image/png;base64,${profileImage}`}  alt="Your avatar" style={{width:size+'px',height:size+'px'}} className="circle-img" />
                )}
            </Fragment>
        )
    }
}