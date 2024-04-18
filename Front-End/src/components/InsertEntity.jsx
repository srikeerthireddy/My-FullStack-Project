// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useState} from 'react';

function InsertEntity() {
    const [formData,setFormData]=useState({
        name:'',
        age:'',
        place:'',
        iplTeam:''

    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    const handleSubmit= async (e)=>{
     e.preventDefault();
     try{
      const response=await fetch('http://localhost:4004/api/create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
      });
      if(!response.ok){
        throw new Error('Failed to add Entity');
      }
      const data=await response.json();
      console.log('Entity added successfully',data);

      setFormData({
        name:'',
        age:'',
        place:'',
        iplTeam:''
      })
     }catch(error){
        console.error('Error in the adding the entity',error);
     }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name}onChange={handleChange}/>
      </div>
      <div>
      <label>Age:</label>
      <input type="text" name="age" value={formData.age}onChange={handleChange}/>
      </div>
      <div>
      <label>Place:</label>
      <input type="text" name="place" value={formData.place}onChange={handleChange}/>
      </div>
      <div>
      <label>IPL TEAM:</label>
      <input type="text" name="iplTeam" value={formData.iplTeam}onChange={handleChange}/>
      </div>
      <button>SUBMIT</button>
      </form>
    </>
  )
}

export default InsertEntity;

