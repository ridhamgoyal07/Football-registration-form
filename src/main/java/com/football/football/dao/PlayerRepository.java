package com.football.football.dao;

import com.football.football.entities.Player;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
    public Player findByUsername(String username);

//    @Query(value = "Update players Set phone_number = :phoneNumber , first_name = :firstName Where username = :username" , nativeQuery = true)
//    public Player updatePlayer(@Param("phoneNumber") String phoneNumber ,@Param("firstName") String firstName ,@Param("username") String username);

}
