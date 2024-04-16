/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
function Cricket(props){
    return(
        <div>
            <h1>Name of the Cricketer:</h1>{props.name}
            <h1>Age of the cricketer:</h1>{props.age}
            <h1>Place:</h1>{props.place}
            <h1>Ipl Team:</h1>{props.iplTeam}
        </div>
    )
}
export default Cricket;