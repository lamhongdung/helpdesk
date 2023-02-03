package com.ez.noioi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ez.noioi.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
    @Query(value = "select * from users where email = ?1", nativeQuery = true)
    User existByEmail(String email);

}
