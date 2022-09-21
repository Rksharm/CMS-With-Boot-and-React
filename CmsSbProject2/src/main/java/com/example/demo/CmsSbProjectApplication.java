package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({"com.example.demo"})
@SpringBootApplication
public class CmsSbProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmsSbProjectApplication.class, args);
	}

}
