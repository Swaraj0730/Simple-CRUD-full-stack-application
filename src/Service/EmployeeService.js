import axios from "axios";

const REST_API_BASE_URL= 'http://localhost:8081/api/employee'

export const listEmployee = () => {
    return axios.get(REST_API_BASE_URL);
} 
export const createEmployee = (employee) =>{
    return axios.post(REST_API_BASE_URL,employee);
}

export const updateEmployee = (employeeid , updateemployee) =>{
    return axios.put(REST_API_BASE_URL + '/' + employeeid  + '/update' , updateemployee)
}

export const getEmployee=(employeeid)=>{
    return axios.get(REST_API_BASE_URL + '/' + employeeid)
}

export const deleteEmployee = (employeeid) =>{
    return axios.delete(REST_API_BASE_URL + '/' + employeeid + '/delete')
}
