package com.example.dockercrudtorrexspring.lutris.Controllers;


import com.example.dockercrudtorrexspring.lutris.Entities.Statistic;
import com.example.dockercrudtorrexspring.lutris.Services.StatiticService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

@RestController
@RequestMapping("/statistic")
public class StatisticController {

    StatiticService statiticService;

    public StatisticController() throws NoSuchAlgorithmException {
        this.statiticService = new StatiticService();

    }

    @GetMapping(path = "/count", produces = "application/json")
    public ResponseEntity<Statistic> countAll() throws SQLException {
        var result = this.statiticService.countAllData();

        if(result == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
