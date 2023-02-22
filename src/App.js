
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4  as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployee] = useState(
    [
      {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    }

    ]
  )
  const showEmployee = true;
  return (
    <div className="App">
     {showEmployee ?(
        <>
        <input type = "text" onChange={(e) =>{console.log(e.target.value);
        setRole(e.target.value); }} />
              <div className='flex flex-wrap' justify-center >
                 {employees.map( (employee )=> {
                  console.log(uuidv4());
                  return (<Employee
                  key = {uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  /> );
                 })}

              </div>
        </>) :
        <p>You dont have the rights</p>
     }
    </div>
  )
}

export default App;
