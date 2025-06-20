package com.project.ems.Controller;

import com.project.ems.Dto.EmployeeDto;
import com.project.ems.Entity.Employee;
import com.project.ems.Service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")

public class EmployeeController {

    private EmployeeService employeeService ;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody Employee employee ){
        EmployeeDto savedEmployee = employeeService.createEmployee(employee) ;
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED) ;
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById ( @PathVariable("id") long id ){
        EmployeeDto employeeDto = employeeService.getEmployee(id);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee (){
        List<EmployeeDto> employeeDtos = employeeService.getAllEmployee();
        return ResponseEntity.ok(employeeDtos) ;
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<EmployeeDto> updateEmployee (@PathVariable("id") long id,
                                                       @RequestBody Employee employee){
        EmployeeDto employeeDto = employeeService.updateEmployee(id , employee);
        return ResponseEntity.ok(employeeDto);
    }
    @DeleteMapping("/{id}/delete")
    public ResponseEntity<String> deleteEmployee ( @PathVariable("id") long id ){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("deleted successfully") ;
    }
}
