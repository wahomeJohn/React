
import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;
  return (
    <div className="App">
     {showEmployee ?(
        <>
        <input type = "text" onChange={(e) =>{console.log(e.target.value);
        setRole(e.target.value); }} />
        <Employee name = 'John' role ='intern'/>
        <Employee name = 'John' role ={role} />
        <Employee name = 'John'/>
        </>) :
        <p>You dont have the rights</p>
     }
    </div>
  )
}

export default App;
