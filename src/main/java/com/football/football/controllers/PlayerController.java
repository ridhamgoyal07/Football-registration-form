package com.football.football.controllers;

import com.football.football.Responses.CustomResponses;
import com.football.football.entities.Player;
import com.football.football.services.PlayerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PlayerController {

    @Autowired
    private PlayerServices playerServices;


    @GetMapping("/player/{username}")
    public ResponseEntity<?> getPlayer(@Valid @NotNull @PathVariable("username") String username){
        if(username.matches("^[A-z0-9]+$" ))
            return this.playerServices.getPlayer(username);
        else{
//            System.out.println("Error");
            return CustomResponses.generateResponse("Invalid Username" , HttpStatus.valueOf(400),null);
        }
    }


    @PostMapping(value = "/player" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addPlayer(@Valid @RequestBody Player player){
        try {
            return this.playerServices.addPlayer(player);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.of(Optional.of(Optional.empty()));
        }
    }


    @PutMapping(value = "/player/{username}" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updatePlayer(@Valid @RequestBody Player player ,@PathVariable("username") String username ){
        if(username.matches("^[A-z0-9]+$" )) {
            player.setUsername(username);
            return this.playerServices.updatePlayer(player , username);
        }
        else{
//            System.out.println("Error");
            return CustomResponses.generateResponse("Invalid Username" , HttpStatus.valueOf(400),null);
        }
    }
}
