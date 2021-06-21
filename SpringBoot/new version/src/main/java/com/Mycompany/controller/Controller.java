package com.Mycompany.controller;

import com.Mycompany.model.FitnessValue;
import com.Mycompany.repository.FitnessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    FitnessRepository fitnessRepository;

    @GetMapping("/values")//вывод всех значений
    public List<FitnessValue> retrieveAllValues() {
        return fitnessRepository.findAll();
    }


    @GetMapping("/values/value/{value}")//поиск определенного значения
    public ResponseEntity<List<FitnessValue>> findById_ent(@PathVariable("value") String value) {
        try {
            List<FitnessValue> tutorials = fitnessRepository.findByValue(value);

            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/values/entity/{entity}")// поиск по сущности
    public ResponseEntity<List<FitnessValue>> findByentity(@PathVariable("entity") Integer entity) {
        try {
            List<FitnessValue> entitylist = fitnessRepository.findByEntity(entity);

            if (entitylist.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(entitylist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/values/{id}")// поиск по id
    public ResponseEntity<FitnessValue> getValuesById(@PathVariable("id") long id) {
        Optional<FitnessValue> tutorialData = fitnessRepository.findById(id);

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/values/{id}")//изменение put
    public ResponseEntity<FitnessValue> updateValues(@PathVariable("id") long id, @RequestBody FitnessValue fitnessValue) {
        Optional<FitnessValue> fitValue = fitnessRepository.findById(id);

        if (fitValue.isPresent()) {
            FitnessValue _fitvalue = fitValue.get();
            _fitvalue.setEntity(fitnessValue.getEntity());
            _fitvalue.setAttribute(fitnessValue.getAttribute());
            _fitvalue.setValue(fitnessValue.getValue());
            return new ResponseEntity<>(fitnessRepository.save(_fitvalue), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/values") //create post
    public ResponseEntity<FitnessValue> createNewRecord(@RequestBody FitnessValue fitnessValue) {
        try {
            FitnessValue _fitnessvalue = fitnessRepository
                    .save(new FitnessValue(fitnessValue.getEntity(), fitnessValue.getAttribute(), fitnessValue.getValue()));
            return new ResponseEntity<>(_fitnessvalue, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
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

   /* @GetMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id) {
        Optional<Tutorial> tutorialData = tutorialRepository.findById(id);

        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
        try {
            Tutorial _tutorial = tutorialRepository
                    .save(new Tutorial(tutorial.getTitle(), tutorial.getDescription(), "false"));
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial) {
        Optional<Tutorial> tutorialData = tutorialRepository.findById(id);

        if (tutorialData.isPresent()) {
            Tutorial _tutorial = tutorialData.get();
            _tutorial.setTitle(tutorial.getTitle());
            _tutorial.setDescription(tutorial.getDescription());
            _tutorial.setPublished(tutorial.isPublished());
            return new ResponseEntity<>(tutorialRepository.save(_tutorial), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/tutorials/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
        try {
            tutorialRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials() {
        try {
            tutorialRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/tutorials/published")
    public ResponseEntity<List<Tutorial>> findByPublished() {
        try {
            List<Tutorial> tutorials = tutorialRepository.findByPublished(true);

            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @GetMapping("/tutorials/description/{description}")
    public ResponseEntity<List<Tutorial>> findByDecscription(@PathVariable("description")  String description) {
        try {
            List<Tutorial> tutorials = tutorialRepository.findByDescription(description);

            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/


        }