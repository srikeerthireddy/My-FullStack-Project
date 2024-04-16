// eslint-disable-next-line no-unused-vars
import React from 'react';
import EntityDisplay from './components/EntityDisplay';
const App=()=>{
    const dummyEntity={
        name:"MS.Dhoni",
        age:40,
        place:"Ranchi",
        iplTeam:"Chennai Super Kings"
    }
    return(
       <>
       <EntityDisplay {...dummyEntity}/>
       </>
    )
    
}
export default App;