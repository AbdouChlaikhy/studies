package com.example.eurekagate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;

@SpringBootApplication
public class EurekagateApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekagateApplication.class, args);
	}

	@Bean
	RouteLocator routes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("r1", r -> r.path("/eurekaS1/**")
						.uri("http://localhost:8081"))
				.route("r2", r -> r.path("/client2/**")
						.uri("http://localhost:8082"))
				.route("r3", r -> r.path("/client3/**")
						.uri("http://localhost:8083"))
				.build();
	}
}
