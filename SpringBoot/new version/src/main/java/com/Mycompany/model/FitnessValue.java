package com.Mycompany.model;

import javax.persistence.*;

@Entity
@Table(name = "values")
public class FitnessValue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Override
    public String toString() {
        return "FitnessValue{" +
                "id=" + id +
                ", entity=" + entity +
                ", attribute=" + attribute +
                ", value='" + value + '\'' +
                '}';
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setEntity(Integer entity) {
        this.entity = entity;
    }

    public void setAttribute(Integer attribute) {
        this.attribute = attribute;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public Integer getEntity() {
        return entity;
    }

    public Integer getAttribute() {
        return attribute;
    }

    public String getValue() {
        return value;
    }

    public FitnessValue(Integer entity, Integer attribute, String value) {
        this.entity = entity;
        this.attribute = attribute;
        this.value = value;
    }

    @Column(name = "entity")
    private Integer entity;

    @Column(name = "attribute")
    private Integer attribute;

    @Column(name = "value")
    private String value;


    public FitnessValue()
    {

    }
}