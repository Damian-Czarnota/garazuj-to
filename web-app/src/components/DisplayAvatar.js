import React, {Component, Fragment} from 'react';

export default class DisplayAvatar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {profile_image,size} = this.props;
        return(
            <Fragment>
                {!profile_image&&(
                    <i className="fa fa-user default-avatar" style={{fontSize:size+'px'}}></i>
                )}
                {profile_image&&(
                    <img src={profile_image}  alt="Your avatar" style={{width:size+'px',height:size+'px'}} className="circle-img" />
                )}
            </Fragment>
        )
    }
}