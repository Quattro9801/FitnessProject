package com.Mycompany.model;

import javax.persistence.*;

@Entity
@Table(name = "values")
public class FitnessValue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_value;

    @Column(name = "id_ent")
    private Integer id_ent;

    @Column(name = "id_attr")
    private Integer id_attr;

    @Column(name = "value")
    private String value;

    @Override
    public String toString() {
        return "FitnessValue{" +
                "id_value=" + id_value +
                ", id_ent=" + id_ent +
                ", id_attr=" + id_attr +
                ", value='" + value + '\'' +
                '}';
    }

    public void setId_value(Integer id_value) {
        this.id_value = id_value;
    }

    public void setId_ent(Integer id_ent) {
        this.id_ent = id_ent;
    }

    public void setId_attr(Integer id_attr) {
        this.id_attr = id_attr;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public long getId_value() {
        return id_value;
    }

    public Integer getId_ent() {
        return id_ent;
    }

    public Integer getId_attr() {
        return id_attr;
    }

    public String getValue() {
        return value;
    }

    public FitnessValue( Integer id_ent, Integer id_attr, String value) {
        this.id_ent = id_ent;
        this.id_attr = id_attr;
        this.value = value;
    }

    public FitnessValue() {

    }


}
