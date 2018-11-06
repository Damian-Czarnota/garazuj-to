/**
 * Created by Damian.Czarnota on 2018-10-12.
 */
import React, { Component } from 'react';


class Grid extends Component{

    constructor(props){
        super(props);
    }

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
                    {data.length>0&&data.map(item=>(
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
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        )
    }
}

export default Grid
