// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import EntityDisplay from './components/EntityDisplay';
import RenderEntities from './components/RenderEntities';
import InsertEntity from './components/InsertEntity';
import UpdateEntity from './components/UpdateEntity';
 const App=()=>{
    const dummyEntity={
        name:"MS.Dhoni",
        age:40,
        place:"Ranchi",
        iplTeam:"Chennai Super Kings",
        
    }
    return(
       <>
       <Router>
       <ul>
        <li>
            <Link to='/entity'>ENTITY</Link>
        </li>
        <li>
            <Link to='/add-entity'>ADD-ENTITY</Link>
        </li>
        <li>
            <Link to='/render-entity'>ALL-ENTITY</Link>
        </li>
       </ul>
       <div>
        <Routes>
       <Route path='/entity' element={<EntityDisplay {...dummyEntity}/>}/> 
      <Route path='add-entity' element={<InsertEntity/>} />
       <Route path='/render-entity' element={<RenderEntities/>}/>
       <Route path='/update/:id' element={<UpdateEntity/>}/>
        </Routes>
       
       </div>
       </Router>
       </>
    )
    
}
export default App;