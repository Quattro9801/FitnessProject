package com.javatechie.jpa.controller;

import com.javatechie.jpa.exception.ResourceNotFoundException;
import com.javatechie.jpa.model.PersonModel;
import com.javatechie.jpa.model.ScheduleModel;
import com.javatechie.jpa.entity.PersonEntity;
import com.javatechie.jpa.entity.SheduleEntity;
import com.javatechie.jpa.repository.PersonRepo;
import com.javatechie.jpa.repository.SheduleRepo;
import org.hibernate.ResourceClosedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SheduleController {

    @Autowired
    private PersonRepo repository;

    @Autowired
    private SheduleRepo sheduleRepo;

    @GetMapping("/findAllPerson")
    public List<PersonEntity> findAllOrders() {
        return repository.findAll();
    }

    @GetMapping("/fitness.com/schedule/{status}")
    public List<ScheduleModel> getJoinInformation(@PathVariable("status") String status) {
        return repository.getJoinInformation(status);
    }

   @GetMapping("/fitness.com/person/trainers/{status}")
    public List<PersonModel> getAllTrainers(@PathVariable("status") String status) {
        return repository.getAllTrainers(status);
    }

/*    @GetMapping("/getDate/{date}") // поиск по дате localhost:8080/api/getDate/20.02.2020
    public List<ScheduleModel> getShedDate(@PathVariable("date") String date) {
        return repository.getShedDate(date);
    }*/

   /* @GetMapping("/getId/{id}") // поиск по id
    public List<ScheduleModel> getId(@PathVariable("id") Long id) {
        return repository.getId(id);
    }
*/
    @DeleteMapping("/delete/{id}")// удаление из таблицы расписание по id
    public ResponseEntity<HttpStatus> deleteValues(@PathVariable("id") long id) {
        try {
            sheduleRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/deletePerson/{id}")// удаляем пользователя из таблицы person
    public ResponseEntity<HttpStatus> deletePerson(@PathVariable("id") long id) {
        try {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/fitness.com/person/personId/{id}") // поиск по id
    public List<PersonModel> getUserId(@PathVariable("id") Long id) {
        return repository.getUserId(id);
    }


/*    @PostMapping("/createRecordShed") //create
    public ResponseEntity<SheduleEntity> createNewRecord(@RequestBody SheduleEntity sheduleEntity) {
        try {
            SheduleEntity sheduleEntity1 = sheduleRepo
                    .save(new SheduleEntity(sheduleEntity.getDate(), sheduleEntity.getTime(), sheduleEntity.getDuration(), sheduleEntity.getLocation(), sheduleEntity.getDisciplineName(), sheduleEntity.getHallNumber()));
            return new ResponseEntity<>(sheduleEntity1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    @PostMapping("/createPerson") //create person
    public ResponseEntity<PersonEntity> createPerson(@RequestBody PersonEntity personEntity) {
        try {
            PersonEntity pm = repository
                    .save(new PersonEntity(personEntity.getId(),personEntity.getSurname(), personEntity.getName(), personEntity.getPatronymic(), personEntity.getNumberPhone(), personEntity.getEmail(), personEntity.getBirthDate(), personEntity.getGender(), personEntity.getStatus()));
            return new ResponseEntity<>(pm, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }


    }

    @PutMapping("/fitness.com/person/{surname}/{name}/{patronymic}/{numberPhone}/{email}/{birthDate}/{gender}/{status}/{id}")//изменить информацию о пользователе
    public ResponseEntity<String> updateSurnameByID(@PathVariable String surname, @PathVariable String name, @PathVariable String patronymic, @PathVariable String numberPhone, @PathVariable String email, @PathVariable String birthDate, @PathVariable String gender,@PathVariable String status, @PathVariable long id) {
        return new ResponseEntity<String>(repository.updateSurnameByID(surname, name, patronymic, numberPhone, email, birthDate, gender,status, id) + " record(s) updated.", HttpStatus.OK);


    }

  @PutMapping("/fitness.com/schedule/{date}/{time}/{duration}/{location}/{disciplineName}/{hallNumber}/{id}")
    public ResponseEntity<String> updateSheduleRow(@PathVariable String date, @PathVariable String time, @PathVariable String duration, @PathVariable String location, @PathVariable String disciplineName, @PathVariable long hallNumber, @PathVariable long id) {
        return new ResponseEntity<String>(repository.updateSheduleRow(date, time, duration, location, disciplineName, hallNumber,  id) + " record(s) updated.", HttpStatus.OK);


    }


   @PostMapping("/fitness.com/schedule/{personId}")//добавление расписания
   public SheduleEntity createShedRow(@PathVariable (value = "personId") Long personId,
                                 @Valid @RequestBody SheduleEntity sheduleEntity) {
       return repository.findById(personId).map(personEntity -> {
            sheduleEntity.setPersonEntity(personEntity);
           return sheduleRepo.save(sheduleEntity);
       }).orElseThrow(() -> new ResourceClosedException("PersonId " + personId + " not found"));
   }

/*    @PutMapping("/update/updateShed/{personId}/Schedule/{Id}")
    public SheduleEntity updateSсheduleEntity(@PathVariable (value = "personId") Long personId,
                                 @PathVariable (value = "Id") Long Id,
                                 @Valid @RequestBody SheduleEntity scheduleRequest) {
        if(!repository.existsById(personId)) {
            throw new ResourceNotFoundException("PostId " + personId + " not found");
        }

        return sheduleRepo.findById(Id).map(schedule -> {
            schedule.setDate(scheduleRequest.getDate());
            return sheduleRepo.save(schedule);
        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + Id + "not found"));
    }
    @PutMapping("/posts/{scheduleId}/{personId}")
    public SheduleEntity updateScheduleRow(@PathVariable Long scheduleId, @Valid @RequestBody SheduleEntity scheduleRequest) {
        return sheduleRepo.findById(scheduleId).map(schedule -> {
           schedule.setDate(scheduleRequest.getDate());
            schedule.setTime(scheduleRequest.getTime());
            schedule.setDuration(scheduleRequest.getDuration());
            schedule.setLocation(scheduleRequest.getLocation());
            schedule.setDisciplineName(scheduleRequest.getDisciplineName());
            schedule.setHallNumber(scheduleRequest.getHallNumber());
            schedule.setPersonEntity(scheduleRequest.getPersonEntity());
            return sheduleRepo.save(schedule);


        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + scheduleId + " not found"));
    }*/

   @DeleteMapping("/delete/deleteScheduleRow/{schedRow}")
    public ResponseEntity<?> deleteScheduleRow(@PathVariable Long schedRow) {
        return sheduleRepo.findById(schedRow).map(schedule -> {
            sheduleRepo.delete(schedule);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + schedRow + " not found"));
    }

/*    @DeleteMapping("/deleteScheduleRow/{id}")// удаляем пользователя из таблицы person
    public ResponseEntity<HttpStatus> deleteScheduleRow(@PathVariable("id") long id) {
        try {
            sheduleRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

}

