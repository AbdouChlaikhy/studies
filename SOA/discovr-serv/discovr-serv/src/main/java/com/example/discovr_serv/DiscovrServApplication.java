package com.example.discovr_serv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DiscovrServApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscovrServApplication.class, args);
	}
}