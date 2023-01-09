package com.project.helpdesksystem.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.helpdesksystem.model.Status;
import com.project.helpdesksystem.repository.StatusRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class StatusController {
	@Autowired
	private StatusRepository statusRepository;

	@GetMapping("/status")
	public List<Status> getAllStatuss() {
		return statusRepository.findAll();
	}
}
