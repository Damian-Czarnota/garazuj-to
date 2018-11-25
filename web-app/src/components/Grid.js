/**
 * Created by Damian.Czarnota on 2018-10-12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component{
    static propTypes = {
        config: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        deleteCar: PropTypes.func
    };
    render(){
        const {config,data} = this.props;
        return(
                <table className="table">
                    <thead>
                        <tr>
                            {config.map(head =>(
                                <th className="table__header" key={head.title}>{head.title}</th>
                            ))}
                            <th className="table__header">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.length>0&&data.map((item,index)=>(
                        <tr className="table__row" key={item.id}>
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
                                    {row.type!=='image'&&(
                                        <span>{item[row.key]}</span>
                                    )}
                                </td>
                            ))}
                            <td className="table__cell">
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={(e)=>this.props.deleteCar(item['id'])}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        )
    }
}

export default Grid
