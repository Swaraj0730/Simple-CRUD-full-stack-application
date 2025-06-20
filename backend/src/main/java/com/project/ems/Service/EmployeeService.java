package com.project.ems.Service;

import com.project.ems.Dto.EmployeeDto;
import com.project.ems.Entity.Employee;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(Employee employee);

    EmployeeDto getEmployee ( long id );

    List<EmployeeDto> getAllEmployee ();

    EmployeeDto updateEmployee(long id , Employee employee) ;

    void deleteEmployee( long id );
}
