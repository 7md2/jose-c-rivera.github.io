/**
 * Created by jose on 25/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Australia = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                    <h1>OCEANIA MAP PLACE-HOLDER</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class australia extends React.Component{
    render(){
        return(<Australia/>);
    }
}