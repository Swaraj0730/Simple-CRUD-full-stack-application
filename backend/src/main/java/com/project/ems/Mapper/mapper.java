package com.project.ems.Mapper;

import com.project.ems.Dto.EmployeeDto;
import com.project.ems.Entity.Employee;

public class mapper {

    public static Employee maptoEmployee(EmployeeDto employeeDto){
        Employee employee = new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
        return employee ;
    }

    public static EmployeeDto maptoEmployeeDto(Employee employee){
        EmployeeDto employeeDto = new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
        return employeeDto;
    }
}
