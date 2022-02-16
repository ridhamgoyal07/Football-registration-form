package com.football.football.services;

import com.football.football.Responses.CustomResponses;
import com.football.football.dao.PlayerRepository;
import com.football.football.entities.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.Optional;

@Service
public class PlayerServices {

    @Autowired
    private PlayerRepository playerRepository;

    public ResponseEntity<?> addPlayer(@RequestBody Player player) {
        Optional<Player> playerOptional = Optional.ofNullable(playerRepository.findByUsername(player.getUsername()));
        if (playerOptional.isPresent()) {
            return CustomResponses.generateResponse("User already Present" , HttpStatus.CONFLICT, playerOptional);
        }
        try{
            Player p = playerRepository.save(player);
            return CustomResponses.generateResponse("User Created Successfully!" , HttpStatus.CREATED , p);
        } catch (Exception e) {
            e.printStackTrace();
            return CustomResponses.generateResponse("Internal Server Error" , HttpStatus.valueOf(500), null);
        }

    }

    public ResponseEntity<?> getPlayer(@RequestBody  String username){
        Optional<Player> playerOptional = Optional.ofNullable(playerRepository.findByUsername(username));
        if(playerOptional.isPresent()){
            return CustomResponses.generateResponse("User Found" , HttpStatus.valueOf(200), playerOptional);
        }else{
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            return CustomResponses.generateResponse("User Not Found" , HttpStatus.valueOf(404) , null);
        }
    }

    public ResponseEntity<?> updatePlayer(@Valid @RequestBody Player player , @RequestBody String username ){
        Optional<Player> playerOptional = Optional.ofNullable(playerRepository.findByUsername(username));
        if(playerOptional.isPresent()){
            try {

                Player p = playerRepository.save(new Player(
                        playerOptional.get().getUid(),
                        playerOptional.get().getUsername(),
                        player.getFirstName(),
                        player.getLastName(),
                        player.getCountryCode(),
                        player.getPhoneNumber(),
                        player.getEmail(),
                        player.getAge(),
                        player.getDesiredTeam(),
                        player.getDesiredPosition(),
                        player.getAddress(),
                        player.getPin_code(),
                        player.getCountry(),
                        player.getCity(),
                        player.getState()
                ));
                return CustomResponses.generateResponse("Update Successfully" , HttpStatus.OK , p);
            }catch (Exception e){
                e.printStackTrace();
                return CustomResponses.generateResponse("Internal Server Error" , HttpStatus.BAD_REQUEST , null);
            }
        }else{
            return CustomResponses.generateResponse("User Not Found" , HttpStatus.valueOf(404) , null);
        }
    }
}
