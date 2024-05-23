// // eslint-disable-next-line no-unused-vars
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate,useLocation } from 'react-router-dom';

// function UpdateEntity() {
//     // const location =useLocation();
//     // const navigate=useNavigate();
//     // const initialData = {
//     //     name: '',
//     //     age: '',
//     //     place: '',
//     //     iplTeam: ''
//     // };
//     const [formData,setFormData]=useState(initialData);
//     useEffect(() => {
//         setFormData(initialData);
//     }, [initialData]);

   
   
   
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setFormData({
//             ...formData,
//             [name]:value
//         });
//     }
//     const handleUpdate= async (e)=>{
//      e.preventDefault();
//      axios.put(`http://localhost:4004/api/update/${formData._id}`,formData)
//      .then((res)=>{
//         console.log("Entity updated successfully",res.data)
//         navigate('/render-entity')
//      }).catch((err)=>console.log("Error updating entity:",err));
//     }
//   return (
//     <>
   
//     <div>
//       <label>Name:</label>
//       <input type="text" name="name" value={formData.name}onChange={handleChange}/>
//       </div>
//       <div>
//       <label>Age:</label>
//       <input type="text" name="age" value={formData.age}onChange={handleChange}/>
//       </div>
//       <div>
//       <label>Place:</label>
//       <input type="text" name="place" value={formData.place}onChange={handleChange}/>
//       </div>
//       <div>
//       <label>IPL TEAM:</label>
//       <input type="text" name="iplTeam" value={formData.iplTeam}onChange={handleChange}/>
//       </div>
//       <button onClick={handleUpdate}>UPDATE</button>
      
//     </>
//   )
// }

// export default UpdateEntity;

