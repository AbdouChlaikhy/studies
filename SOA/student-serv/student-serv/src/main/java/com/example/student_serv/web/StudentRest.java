package com.example.student_serv.web;

import com.example.student_serv.entities.Student;
import com.example.student_serv.repositories.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentRest {

    private final StudentRepository studentRepository;

    public StudentRest(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/all")
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @PostMapping("/add")
    public List<Student> addStudent(@RequestBody Student st) {
        studentRepository.save(st);
        return studentRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public List<Student> deleteStudent(@PathVariable Long id) {
        studentRepository.deleteById(id);
        return studentRepository.findAll();
    }

    @GetMapping("/students/name/{firstName}")
    public List<Student> getStudentByFirstName(@PathVariable String firstName) {
        return studentRepository.findByFirstName(firstName);
    }
}