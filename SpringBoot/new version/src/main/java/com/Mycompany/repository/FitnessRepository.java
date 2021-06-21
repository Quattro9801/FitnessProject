package com.Mycompany.repository;

import com.Mycompany.model.FitnessValue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FitnessRepository extends JpaRepository<FitnessValue, Long> {
    // List<Tutorial> findByPublished(boolean published);
    //List<FitnessValue> findById_ent(long id_ent);

    // List<Tutorial> findByTitleContaining(String title);
    // List<Tutorial> findByDescription(String description);
    List<FitnessValue> findByValue(String value);
    List<FitnessValue> findByEntity(Integer entity);
}