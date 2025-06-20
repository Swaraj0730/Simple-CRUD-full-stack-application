import React, { useEffect, useState } from 'react'
import { listEmployee, updateEmployee , deleteEmployee} from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmpComponent = () => {

    const [employee,setEmployee] = useState([])
    const navigator = useNavigate() ;

    useEffect(()=>{
        getAllEmployees();
    },[]) 

    function getAllEmployees(){

        listEmployee().then((response) => {
            setEmployee(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id)
        deleteEmployee(id).then((response)=>{
            getAllEmployees();
        }).catch(error=>{
            console.error(error)
        })
        
    }

  return (
    <div className='container'>
        <h1 className='text-center'> List of Employees </h1>
         <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee firstName</th>
                    <th>Employee lastName</th>
                    <th>Employee email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button id='button1'className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button id='button2' className='btn btn-danger' onClick={() => removeEmployee(employee.id)}> Delete </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
