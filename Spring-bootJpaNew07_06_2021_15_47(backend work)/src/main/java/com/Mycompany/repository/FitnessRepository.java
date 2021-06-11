package com.Mycompany.repository;

import com.Mycompany.model.FitnessValue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FitnessRepository extends JpaRepository<FitnessValue, Long> {
   // List<FitnessValue> findByPublished(long id_entity);
   // List<FitnessValue> findByTitleContaining(String value);
}
