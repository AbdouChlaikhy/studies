package com.example.serveureureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class ServeureurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServeureurekaApplication.class, args);
	}

}
