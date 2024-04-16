// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
function RenderEntities(){
    const [entities,setEntities]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4004/api/read')
        .then(response=>{
            console.log(response.data)
            setEntities(response.data.data);
        }).catch(error=>{
            console.log('Error fetching entities:',error)
        });
    },[]);
    return(
        <>
        <h1>All Entities</h1>
        <div>
            <ul>
                {entities &&entities.map(entity=>(
                    <li key={entity._id}>
                        <h2>Name of the cricketer:{entity.name}</h2>
                        <h3>Age:{entity.age}</h3>
                        <h4>Place:{entity.place}</h4>
                        <h5>IPL_TEAM:{entity.iplTeam}</h5>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RenderEntities;