package com.Mycompany.controller;

import com.Mycompany.model.FitnessValue;
import com.Mycompany.repository.FitnessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    FitnessRepository fitnessRepository;



    @GetMapping("/values")
    public List<FitnessValue> retrieveAllValues() {
        return fitnessRepository.findAll();
    }



    @GetMapping("/values/{id}")
    public ResponseEntity<FitnessValue> getValuesById(@PathVariable("id") long id) {
        Optional<FitnessValue> tutorialData = fitnessRepository.findById(id);

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping("/values")
    public ResponseEntity<FitnessValue> createNewRecord(@RequestBody FitnessValue fitnessValue) {
        try {
            FitnessValue _fitnessvalue = fitnessRepository
                    .save(new FitnessValue(fitnessValue.getId_ent(), fitnessValue.getId_attr(), fitnessValue.getValue()));
            return new ResponseEntity<>(_fitnessvalue, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/values/{id}")
    public ResponseEntity<FitnessValue> updateValues(@PathVariable("id") long id, @RequestBody FitnessValue fitnessValue) {
        Optional<FitnessValue> fitValue = fitnessRepository.findById(id);

        if (fitValue.isPresent()) {
            FitnessValue _fitvalue = fitValue.get();
            _fitvalue.setId_ent(fitnessValue.getId_ent());
            _fitvalue.setId_attr(fitnessValue.getId_attr());
            _fitvalue.setValue(fitnessValue.getValue());
            return new ResponseEntity<>(fitnessRepository.save(_fitvalue), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @DeleteMapping("/values/{id}")
    public ResponseEntity<HttpStatus> deleteValues(@PathVariable("id") long id) {
        try {
            fitnessRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
