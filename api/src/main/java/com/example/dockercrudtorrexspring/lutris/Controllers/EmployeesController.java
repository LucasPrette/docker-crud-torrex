package com.example.dockercrudtorrexspring.lutris.Controllers;

import com.example.dockercrudtorrexspring.lutris.Entities.Employee;
import com.example.dockercrudtorrexspring.lutris.Services.EmployeesServices;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeesController {

    EmployeesServices employeesServices;

    public EmployeesController() throws NoSuchAlgorithmException {
        this.employeesServices = new EmployeesServices();
    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Employee>> getAll() {
        try {
            ArrayList<Employee> employees = this.employeesServices.getAll();
            return new ResponseEntity<>(employees, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @GetMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<Employee> findOne(@PathVariable("id") int id) {
        Employee result = null;
        try {
            result = this.employeesServices.findOne(id);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @PostMapping(produces = "application/json")
    public ResponseEntity<Employee> create(@RequestBody Employee employee) {
        try {
            var result = this.employeesServices.create(employee);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Employee employee) {
        try {
            var result = this.employeesServices.findOne(id);
            if (result == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            result.setName(employee.getName());
            result.setDate(employee.getDate());
            result.setIdSector(employee.getIdSector());
            result.setIdUnit(employee.getIdUnit());

            this.employeesServices.update(result);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        try {
            var result = this.employeesServices.findOne(id);
            if (result == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            this.employeesServices.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);


    }
}
