package com.project.helpdesksystem.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import javax.validation.Valid;
import java.nio.file.Files;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.helpdesksystem.exception.ResourceNotFoundException;
import com.project.helpdesksystem.model.Faq;
import com.project.helpdesksystem.repository.FaqRepository;
import com.project.helpdesksystem.services.FileUploadService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class FaqController {

	@Autowired
	private FaqRepository faqRepository;
	
	@Autowired
	public FileUploadService fileService;
	
	@PersistenceContext
    private EntityManager entityManager;

	@GetMapping("/faq")
	public List<Faq> getAllFaqs() {
		return faqRepository.findAll();
	}
	
	@GetMapping("/faq/{id}")
	public ResponseEntity<Faq> getFaqById(@PathVariable(value = "id") Long faqId)
			throws ResourceNotFoundException {
		Faq faq = faqRepository.findById(faqId)
				.orElseThrow(() -> new ResourceNotFoundException("Faq not found for this id :: " + faqId));
		return ResponseEntity.ok().body(faq);
	}

	@PostMapping("/faq")
	public Faq createFaq(@Valid @RequestBody Faq faq) {
		System.out.print("I am here");
		System.out.print(faq);
		return faqRepository.save(faq);
	}
	
	@PutMapping("/faq/{id}")
	public ResponseEntity<Faq> updateFaq(@PathVariable(value = "id") Long faqId,
			@Valid @RequestBody Faq faqDetails) throws ResourceNotFoundException {
		final Faq updatedFaq = faqRepository.save(faqDetails);
		return ResponseEntity.ok(updatedFaq);
	}

	@DeleteMapping("/faq/{id}")
	public Map<String, Boolean> deleteFaq(@PathVariable(value = "id") Long faqId)
			throws ResourceNotFoundException {
		Faq faq = faqRepository.findById(faqId)
				.orElseThrow(() -> new ResourceNotFoundException("Faq not found for this id :: " + faqId));

		faqRepository.delete(faq);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
