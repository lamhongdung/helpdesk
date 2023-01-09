package com.project.helpdesksystem.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.helpdesksystem.exception.ResourceNotFoundException;
import com.project.helpdesksystem.model.Comments;
import com.project.helpdesksystem.model.Customer;
import com.project.helpdesksystem.model.Ticket;
import com.project.helpdesksystem.repository.CommentsRepository;
import com.project.helpdesksystem.services.FileUploadService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class CommentsController {

	@Autowired
	private CommentsRepository commentsRepository;
	
	@Autowired
	public FileUploadService fileService;
	
	@PersistenceContext
    private EntityManager entityManager;

	@GetMapping("/comments")
	public List<Comments> getAllCommentss() {
		return commentsRepository.findAll();
	}

	@GetMapping("/comments/search/{name}")
	public List<Comments> getCommentsByName(@PathVariable(value = "name") String commentsName) {
			return commentsRepository.serchUserByName(commentsName);
	}
	
	@GetMapping("/comments/search-state/{state}")
	public List<Comments> serchUserByState(@PathVariable(value = "state") String commentsState) {
			return commentsRepository.serchUserByState(commentsState);
	}
	
	
	@GetMapping("/comments/{id}")
	public ResponseEntity<Comments> getCommentsById(@PathVariable(value = "id") Long commentsId)
			throws ResourceNotFoundException {
		Comments comments = commentsRepository.findById(commentsId)
				.orElseThrow(() -> new ResourceNotFoundException("Comments not found for this id :: " + commentsId));
		return ResponseEntity.ok().body(comments);
	}
	
	@GetMapping("/comments/all-comments/{id}")
	public ArrayList getAllSalaryFields(@PathVariable(value = "id") String ticket_id) {
		
		String SQL = "SELECT cmt, cust, blg from comments cmt, customer cust, ticket blg WHERE comments_user_id = customer_id AND ticket_id = comments_ticket_id";
		 Query q = entityManager.createQuery(SQL);
		 if(!ticket_id.equals("0")) {
			 System.out.print("Employee Id : "+ticket_id);

			 SQL = "SELECT cmt, cust, blg from comments cmt, customer cust, ticket blg WHERE comments_user_id = customer_id AND ticket_id = comments_ticket_id AND ticket_id = :ticket_id";
			 q = entityManager.createQuery(SQL);
			 q.setParameter("ticket_id", ticket_id);
		 } 
		 List<Object[]> comments = q.getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : comments ) {
			  Comments comments_details = (Comments)row[ 0 ];
			  Customer customer_details = (Customer)row[ 1 ];
			  Ticket ticket_details = (Ticket)row[ 2 ];
			
			    HashMap<String, String> results = new HashMap();
			   
				results.put("comments_id",String.valueOf(comments_details.getComments_id()));
				results.put("comments_title",comments_details.getComments_title());
				results.put("comments_ticket_id",String.valueOf(comments_details.getComments_ticket_id()));
				results.put("comments_description",comments_details.getComments_description());
				results.put("comments_date",comments_details.getComments_date());
				results.put("customer_name",customer_details.getCustomer_first_name()+" "+customer_details.getCustomer_last_name());
				results.put("ticket_id",String.valueOf(ticket_details.getTicket_id()));
				results.put("ticket_name",ticket_details.getTicket_title());
				
			    resultArray.add(results);
			 
		 }	 

        return resultArray;
	}
	
	@GetMapping("/comments/all-users-comments/{id}")
	public ArrayList getAllUsersComment(@PathVariable(value = "id") String user_id) {
		
		String SQL = "SELECT cmt, cust, blg from comments cmt, customer cust, ticket blg WHERE comments_user_id = customer_id AND ticket_id = comments_ticket_id";
		 Query q = entityManager.createQuery(SQL);
		 if(!user_id.equals("0")) {

			 SQL = "SELECT cmt, cust, blg from comments cmt, customer cust, ticket blg WHERE comments_user_id = customer_id AND ticket_id = comments_ticket_id AND customer_id = :user_id";
			 q = entityManager.createQuery(SQL);
			 q.setParameter("user_id", user_id);
		 } 
		 List<Object[]> comments = q.getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : comments ) {
			  Comments comments_details = (Comments)row[ 0 ];
			  Customer customer_details = (Customer)row[ 1 ];
			  Ticket ticket_details = (Ticket)row[ 2 ];
			
			    HashMap<String, String> results = new HashMap();
			   
				results.put("comments_id",String.valueOf(comments_details.getComments_id()));
				results.put("comments_title",comments_details.getComments_title());
				results.put("comments_ticket_id",String.valueOf(comments_details.getComments_ticket_id()));
				results.put("comments_description",comments_details.getComments_description());
				results.put("comments_date",comments_details.getComments_date());
				results.put("customer_name",customer_details.getCustomer_first_name()+" "+customer_details.getCustomer_last_name());
				results.put("ticket_id",String.valueOf(ticket_details.getTicket_id()));
				results.put("ticket_name",ticket_details.getTicket_title());
				
			    resultArray.add(results);
			 
		 }	 

        return resultArray;
	}

	@PostMapping("/comments")
	public Comments createComments(@Valid @RequestBody Comments comments) {
		return commentsRepository.save(comments);
	}
	
	@PutMapping("/comments/{id}")
	public ResponseEntity<Comments> updateComments(@PathVariable(value = "id") Long commentsId,
			@Valid @RequestBody Comments commentsDetails) throws ResourceNotFoundException {
		final Comments updatedComments = commentsRepository.save(commentsDetails);
		return ResponseEntity.ok(updatedComments);
	}

	@DeleteMapping("/comments/{id}")
	public Map<String, Boolean> deleteComments(@PathVariable(value = "id") Long commentsId)
			throws ResourceNotFoundException {
		Comments comments = commentsRepository.findById(commentsId)
				.orElseThrow(() -> new ResourceNotFoundException("Comments not found for this id :: " + commentsId));

		commentsRepository.delete(comments);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
