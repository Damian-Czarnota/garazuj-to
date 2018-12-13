import React, {Component, Fragment} from 'react';

export default class DisplayAvatar extends Component{
    render(){
        let {image,size, label} = this.props;
        return(
            <Fragment>
                {!image&&!label&&(
                    <i className="fa fa-user default-avatar" style={{fontSize:size+'px'}}></i>
                )}
                {!image&&label==='car'&&(
                    <i className="fa fa-car default-avatar" style={{fontSize:size+'px'}}></i>
                )}
                {image&&(
                    <img src={`data:image/png;base64,${image}`}  alt="Your avatar" style={{width:size+'px',height:size+'px'}} className="circle-img" />
                )}
            </Fragment>
        )
    }
}