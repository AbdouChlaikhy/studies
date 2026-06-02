package com.example.course_serv;

import com.example.course_serv.entities.Course;
import com.example.course_serv.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CourseServApplication implements CommandLineRunner {

	@Autowired
	private CourseRepository courseRepository;

	public static void main(String[] args) {
		SpringApplication.run(CourseServApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		courseRepository.save(new Course(null, "ionic", 24, 4.0));
		courseRepository.save(new Course(null, "react", 22, 3.0));
		courseRepository.save(new Course(null, "SOA", 20, 2.5));

		courseRepository.findAll().forEach(System.out::println);
	}
}