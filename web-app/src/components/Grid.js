/**
 * Created by Damian.Czarnota on 2018-10-12.
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import EditCarModal from './EditCarModal';
import { Link } from 'react-router-dom'

class Grid extends Component{
    static propTypes = {
        noHeaders:PropTypes.bool,
        config: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        deleteItem: PropTypes.func
    };

    render(){
        const {config,data,noHeaders} = this.props;
        return(
                <table className="table">
                    {!noHeaders&&(
                        <thead>
                        <tr>
                            {config.map((head,index) =>(
                                <th className="table__header" key={index}>{head.title}</th>
                            ))}
                        </tr>
                        </thead>
                    )}
                    <tbody>
                    {data.length>0&&data.map((item,index)=>(
                        <tr className="table__row" key={index}>
                            {config.map((row,key) =>(
                                <td className="table__cell" key={key}>
                                    {row.type==='image'&&(
                                        <div>
                                            {item[row.key]!==''&&(
                                                <img style={{width:48+'px'}} alt={item.id} src={item[row.key]} />
                                            )}
                                            {item[row.key]===''&&(
                                                <span>No photo</span>
                                            )}
                                        </div>
                                    )}
                                    {(row.type==='text'||row.type==='number')&&(
                                        <span>{item[row.key]}</span>
                                    )}
                                    {row.type==='length'&&(
                                        <span>{item[row.key].length}</span>
                                    )}
                                    {row.key==='action'&&(
                                        <Fragment>
                                            {row.button.map((button,index) => (
                                                <Fragment key={index}>
                                                    {button.type==='show-details'&&(
                                                        <Link to={`${button.URL}/${item.id}`}><button className="btn btn-primary">Show details</button></Link>
                                                    )}
                                                    {button.type==='edit-car'&&(
                                                        <EditCarModal car={item} getCars={this.props.getCars} />
                                                    )}
                                                    {button.type==='delete'&&(
                                                        <button className="btn btn-danger" onClick={(e) => {this.props.deleteItem(item.id)}}>Delete</button>
                                                    )}
                                                </Fragment>

                                            ))}
                                        </Fragment>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
        )
    }
}

export default Grid
