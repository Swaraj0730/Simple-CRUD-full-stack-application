import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Service/EmployeeService'
import { useNavigate , useParams } from 'react-router-dom'

export const EmployeeComponent = () => {

    const[firstName,setFirstName] = useState('')
    const[lastName,setlastName] = useState('')
    const[email,setEmail] = useState('')

    const [errors,setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {

        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName)
                setlastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch( error => {
                console.log(error)
            })
        }

    },[id]);
     
    function saveOrUpdateEmoloyee(e){
        e.preventDefault();

        if(validateForm()){

            const employee = {firstName,lastName,email}
            console.log(employee)

            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data)
                    navigator('/')
                }).catch(error =>{
                    console.error(e)
                })
            }else{

                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employee')
                }).catch(error=>{
                    console.error(e)
                })
            }
        }
    }

    function validateForm(){

        let valid = true ;
        const errorCopy = {... errors}

        if(firstName.trim()){
            errorCopy.firstName='';
        }else{
            errorCopy.firstName='first name is required';
            valid = false ;
        }

        if(lastName.trim()){
            errorCopy.lastName='';
        }else{
            errorCopy.lastName='last name is required';
            valid = false ;
        }

        if(email.trim()){
            errorCopy.email='';
        }else{
            errorCopy.email='email id is required';
            valid = false ;
        }
        setErrors(errorCopy);

        return valid ;
    }

    function pageTitle(){
        if(id){
            return  <h2 className='text-center'>Upadte Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }

    }

  return (
    <div className='container'>
        <br /><br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'> First Name : </label>
                            <input
                                type="text"
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid' : '' }`}
                                onChange={(e)=> setFirstName(e.target.value)}
                            />
                            { errors.firstName  && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Last Name : </label>
                            <input
                                type="text"
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${ errors.lastName ? 'is-invalid' : '' }`}
                                onChange={(e)=> setlastName(e.target.value)}
                            />
                            { errors.lastName  && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Email : </label>
                            <input
                                type="text"
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid' : '' }`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            { errors.email  && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                
                        <button className='btn btn-success' onClick={saveOrUpdateEmoloyee}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
