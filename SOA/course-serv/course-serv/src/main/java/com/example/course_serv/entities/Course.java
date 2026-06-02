package com.example.course_serv.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCourse;

    private String disCourse;
    private int vhCourse;
    private double coefCourse;

    // Constructeur vide
    public Course() {
    }

    // Constructeur avec paramètres
    public Course(Integer idCourse, String disCourse, int vhCourse, double coefCourse) {
        this.idCourse = idCourse;
        this.disCourse = disCourse;
        this.vhCourse = vhCourse;
        this.coefCourse = coefCourse;
    }

    // Getters et Setters
    public Integer getIdCourse() {
        return idCourse;
    }

    public void setIdCourse(Integer idCourse) {
        this.idCourse = idCourse;
    }

    public String getDisCourse() {
        return disCourse;
    }

    public void setDisCourse(String disCourse) {
        this.disCourse = disCourse;
    }

    public int getVhCourse() {
        return vhCourse;
    }

    public void setVhCourse(int vhCourse) {
        this.vhCourse = vhCourse;
    }

    public double getCoefCourse() {
        return coefCourse;
    }

    public void setCoefCourse(double coefCourse) {
        this.coefCourse = coefCourse;
    }

    @Override
    public String toString() {
        return "Course{" +
                "idCourse=" + idCourse +
                ", disCourse='" + disCourse + '\'' +
                ", vhCourse=" + vhCourse +
                ", coefCourse=" + coefCourse +
                '}';
    }
}