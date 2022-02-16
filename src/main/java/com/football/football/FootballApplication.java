package com.football.football;

import com.football.football.dao.PlayerRepository;
import com.football.football.entities.Player;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class FootballApplication {


	public static void main(String[] args) {
		ApplicationContext context =  SpringApplication.run(FootballApplication.class, args);
//		PlayerRepository playerRepository = context.getBean(PlayerRepository.class);

		System.out.println("Application Started !!");
	}

}
