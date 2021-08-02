package com.javatechie.jpa.repository;

import com.javatechie.jpa.model.PersonModel;
import com.javatechie.jpa.model.ScheduleModel;
import com.javatechie.jpa.entity.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface PersonRepo extends JpaRepository<PersonEntity,Long> {


    @Query("SELECT new com.javatechie.jpa.model.ScheduleModel(p.id,p.surname,p.name,p.patronymic,s.date,s.time,s.duration,s.disciplineName,s.location,s.hallNumber) FROM PersonEntity p JOIN p.values s where p.status=:status")// вывод всех записей расписания

    public List<ScheduleModel> getJoinInformation(@Param("status") String status );
    @Query("SELECT new com.javatechie.jpa.model.ScheduleModel(p.id,p.surname,p.name,p.patronymic,s.date,s.time,s.duration,s.location,s.disciplineName,s.hallNumber) FROM PersonEntity p JOIN p.values s where s.id=:id" )
    public List<ScheduleModel> getId(@Param("id") Long id);//поиск по id распимания

    @Query("SELECT new com.javatechie.jpa.model.ScheduleModel(p.id,p.surname,p.name,p.patronymic,s.date,s.time,s.duration,s.disciplineName,s.location,s.hallNumber) FROM PersonEntity p JOIN p.values s where s.date=:date" )
    public List<ScheduleModel> getShedDate(@Param("date") String date);// поиск записей по дате

@Query("SELECT new com.javatechie.jpa.model.PersonModel(p.id,p.surname,p.name,p.patronymic,p.numberPhone,p.email,p.birthDate,p.gender,p.status)FROM PersonEntity p where p.id=:id")

    public List<PersonModel> getUserId(@Param("id") Long id);//вывод из таблицы person по id


    @Query("SELECT new com.javatechie.jpa.model.PersonModel(p.id,p.surname,p.name,p.patronymic,p.numberPhone,p.email,p.birthDate,p.gender,p.status)FROM PersonEntity p where p.status=:status")

    public List<PersonModel> getAllTrainers(@Param("status") String status);//вывод из таблицы person по id


    @Transactional
    @Modifying
    @Query("UPDATE PersonEntity set surname=:surname,name=:name,patronymic=:patronymic,numberPhone=:numberPhone,email=:email,birthDate=:birthDate,gender=:gender,status=:status where id=:id" )//изменить фамилию по id
    Integer updateSurnameByID(String surname,String name,String patronymic,String numberPhone,String email,String birthDate,String gender,String status,long id);


    @Transactional
    @Modifying
    @Query("UPDATE SheduleEntity set date=:date,time=:time,duration=:duration,location=:location,disciplineName=:disciplineName,hallNumber=:hallNumber where id=:id" )//изменить расписание по id
    Integer updateSheduleRow(String date,String time,String duration,String location,String disciplineName,long hallNumber,long id);


   /* @Modifying
    @Query(value = "INSERT into SheduleEntity(date, time,  duration,  location, disciplineName, haillNumber) values (:date,:time,:duration,:location,disciplineName,haillNumber )",nativeQuery = true)

    public void insertNewSheduleRow(@Param("date") String date,@Param("time") String time,@Param("duration") String duration,@Param("disciplineName") String disciplineName,@Param("haillNumber") long haillNumber);*/



}
