package com.project.ems.Service.impl;

import com.project.ems.Dto.EmployeeDto;
import com.project.ems.Entity.Employee;
import com.project.ems.Exception.ResourceNotFoundException;
import com.project.ems.Mapper.mapper;
import com.project.ems.Repository.EmployeeRepository;
import com.project.ems.Service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository ;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(Employee employee) {
        Employee savedEmployee = employeeRepository.save(employee) ;
        return mapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployee(long id) {
        Employee foundEmployee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist")
        );
        return mapper.maptoEmployeeDto(foundEmployee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDto>employeeDtos = employees.stream()
                .map((employee)->mapper.maptoEmployeeDto(employee))
                .collect(Collectors.toList()
                );
        return employeeDtos ;
    }

    @Override
    public EmployeeDto updateEmployee(long id , Employee employee) {
        Employee employee1 = employeeRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Employee does not exist")
        );
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());
        employee1.setEmail(employee.getEmail());
        employeeRepository.save(employee1);
        return mapper.maptoEmployeeDto(employee1);

    }

    @Override
    public void deleteEmployee(long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                ()->new ResourceNotFoundException("Employee does not exist")
        );
        employeeRepository.delete(employee);

    }
}
