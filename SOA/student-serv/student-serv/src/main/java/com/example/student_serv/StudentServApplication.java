package com.example.student_serv;

import com.example.student_serv.entities.Student;
import com.example.student_serv.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class 	StudentServApplication implements CommandLineRunner {

	@Autowired
	private StudentRepository studentRepository;

	public static void main(String[] args) {
		SpringApplication.run(StudentServApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		studentRepository.save(new Student(null, "abdou", "chlaikhy", 26.0));
		studentRepository.save(new Student(null, "xxxxx", "yyyyy", 21.0));
		studentRepository.save(new Student(null, "aaaaaa", "bbbbbb", 29.0));

		studentRepository.findAll().forEach(student -> {
			System.out.println(student);
		});
	}
}