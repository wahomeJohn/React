
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4  as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployee] = useState(
    [
      {
      id: 1,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      id: 2,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      id: 3,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      id: 4,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    {
      id: 5,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    },
    { id: 6,
      name:'caleb', 
      role: 'developer', 
      img: 'https://images.pexels.com/photos/5824213/pexels-photo-5824213.jpeg'
    }

    ]
  )
  function updateEmployee(id, newName, newRole){
   const updatedEmployees = employees.map((employee) => {
    if (id == employee.id ) {
      return {...employee, name : newName, role: newRole};
    }
    return employee;
   });
   setEmployee(updatedEmployees);
  }

  function newEmployee(name, role, img){
   const newEmployee ={
      id:uuidv4(),
      name:name,
      role:role,
      img:img
    }
  setEmployee([...employees, newEmployee])}
  const showEmployee = true;
  return (
    <div className="App">
     {showEmployee ?(
        <>
        <input type = "text" onChange={(e) =>{
        setRole(e.target.value); }} />
              <div className='flex flex-wrap' justify-center >
                 {employees.map( (employee )=> {
                
                  return (<Employee

                  key = {employee.id}
                  id= {employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee = {updateEmployee}

                  /> );
                 })}

              </div>
              <AddEmployee  newEmployee ={newEmployee}/>
        </>) :
        <p>You dont have the rights</p>
     }
    </div>
  )
}

export default App;
