// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function RenderEntities(){
    const [entities,setEntities]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4004/api/read')
        .then(response=>{
            console.log(response.data)
            setEntities(response.data.data);
        }).catch(error=>{
            console.log('Error fetching entities:',error)
        });
    },[]);
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:4004/api/delete/${id}`)
        .then((response)=>{
            setEntities(entities.filter((entity)=>entity._id!==id));
            console.log("Entity deleted successfully:",response.data);
        }).catch((error)=>{
            console.log("Entity deleted entity:",error);
        })
    }
    const handleUpdate=(item)=>{
        navigate("/update/:id",{name:item});
    }
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
                        <button onClick={()=>handleUpdate(entity)}>Edit</button>
                        <button onClick={()=>handleDelete(entity._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RenderEntities;