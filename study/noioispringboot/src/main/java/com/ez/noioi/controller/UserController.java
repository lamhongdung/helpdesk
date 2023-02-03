package com.ez.noioi.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.noioi.entity.User;
import com.ez.noioi.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/users")
	public ResponseEntity<User> createUser() {
		
		List<User> list = new ArrayList<>();	
		
		User u1 = new User("dunglh@gmail.com", "dunglh");
		User u2 = new User("conthuongma@gmail.com","ma oi");
		
//		list.add(u1);
//		list.add(u2);
		
//		User n1 = userRepository.save(u1);
//		User n2 = userRepository.save(u2);
		
		User abc = userRepository.existByEmail("conthuongma@gmail.com");
		
//		userRepository.find
		
//		if (abc != null) {
//			System.out.println("ton tai email " + abc);
//		}
//		else {
//			System.out.println("ko ton tai");		
//		}
//		
//		list.add(n1);
//		list.add(n2);
		
		
		return ResponseEntity.status(200).body(abc);

	}
}
