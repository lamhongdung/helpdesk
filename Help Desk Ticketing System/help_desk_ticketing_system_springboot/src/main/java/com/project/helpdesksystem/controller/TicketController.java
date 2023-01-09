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
import com.project.helpdesksystem.model.Customer;
import com.project.helpdesksystem.model.Ticket;
import com.project.helpdesksystem.model.Category;
import com.project.helpdesksystem.model.Status;

import com.project.helpdesksystem.repository.TicketRepository;
import com.project.helpdesksystem.services.FileUploadService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class TicketController {

	@Autowired
	private TicketRepository ticketRepository;
	
	@Autowired
	public FileUploadService fileService;
	
	@PersistenceContext
    private EntityManager entityManager;

	@GetMapping("/ticket")
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}
	
	@GetMapping("/ticket/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable(value = "id") Long ticketId)
			throws ResourceNotFoundException {
		Ticket ticket = ticketRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));
		return ResponseEntity.ok().body(ticket);
	}

	@PostMapping("/ticket")
	public Ticket createTicket(@Valid @RequestBody Ticket ticket) {
		System.out.print("I am here");
		System.out.print(ticket);
		return ticketRepository.save(ticket);
	}
	
	@GetMapping("/ticket/all-ticket")
	public ArrayList getAllEmployeeFields() {
		 Query q = entityManager.createQuery("SELECT tict,cust,cat,sts from ticket tict, customer cust, category cat, status sts WHERE customer_id = ticket_user_id AND ticket_type_id = category_id AND ticket_status_id = status_id ORDER  BY ticket_id DESC");
		 List<Object[]> sell = q.getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : sell ) {
			  Ticket ticket_details = (Ticket)row[ 0 ];
			  Customer customer_details = (Customer)row[ 1 ];
			  Category category_details = (Category)row[ 2 ];
			  Status status_details = (Status)row[ 3 ];
			  
			  HashMap<String, String> results = new HashMap();
			  	results.put("ticket_id",String.valueOf(ticket_details.getTicket_id()));
			    results.put("ticket_title",ticket_details.getTicket_title());
			    results.put("ticket_description",ticket_details.getTicket_description());
			    results.put("status_title",status_details.getStatus_name());
			    results.put("category_title",category_details.getCategory_title());
			    results.put("category_image",category_details.getCategory_image_filename());
			    results.put("customer_name",customer_details.getCustomer_first_name()+" "+customer_details.getCustomer_last_name());
			    results.put("customer_mobile",String.valueOf(customer_details.getCustomer_mobile()));
			    results.put("customer_email",String.valueOf(customer_details.getCustomer_email()));

						
				resultArray.add(results);
			 
		 }	 

        return resultArray;
	}
	
	@GetMapping("/ticket/details/{id}")
	public ArrayList getTicketDetails(@PathVariable(value = "id") Long ticketId) {
		 Query q = entityManager.createQuery("SELECT tict,cust,cat,sts from ticket tict, customer cust, category cat, status sts WHERE customer_id = ticket_user_id AND ticket_type_id = category_id AND ticket_status_id = status_id AND ticket_id = ?1");
		 List<Object[]> sell = q.setParameter(1, ticketId).getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : sell ) {
			  Ticket ticket_details = (Ticket)row[ 0 ];
			  Customer customer_details = (Customer)row[ 1 ];
			  Category category_details = (Category)row[ 2 ];
			  Status status_details = (Status)row[ 3 ];
			  
			  HashMap<String, String> results = new HashMap();
			    results.put("ticket_id",String.valueOf(ticket_details.getTicket_id()));
			    results.put("ticket_title",ticket_details.getTicket_title());
			    results.put("ticket_description",ticket_details.getTicket_description());
			    results.put("status_title",status_details.getStatus_name());
			    results.put("category_title",category_details.getCategory_title());
			    results.put("category_image",category_details.getCategory_image_filename());
			    results.put("customer_name",customer_details.getCustomer_first_name()+" "+customer_details.getCustomer_last_name());
			    results.put("customer_mobile",String.valueOf(customer_details.getCustomer_mobile()));
			    results.put("customer_email",String.valueOf(customer_details.getCustomer_email()));

				
				resultArray.add(results);
			 
		 }	 

        return resultArray;
	}
	
	@GetMapping("/ticket/my-ticket/{id}")
	public ArrayList getAllCustomerTickets(@PathVariable(value = "id") Long ticketId) {
		 Query q = entityManager.createQuery("SELECT tict,cust,cat,sts from ticket tict, customer cust, category cat, status sts WHERE customer_id = ticket_user_id AND ticket_type_id = category_id AND ticket_status_id = status_id AND ticket_user_id = ?1");
		 List<Object[]> sell = q.setParameter(1, ticketId).getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : sell ) {
			  Ticket ticket_details = (Ticket)row[ 0 ];
			  Customer customer_details = (Customer)row[ 1 ];
			  Category category_details = (Category)row[ 2 ];
			  Status status_details = (Status)row[ 3 ];
			  
			  HashMap<String, String> results = new HashMap();
			    results.put("ticket_id",String.valueOf(ticket_details.getTicket_id()));
			    results.put("ticket_title",ticket_details.getTicket_title());
			    results.put("ticket_description",ticket_details.getTicket_description());
			    results.put("status_title",status_details.getStatus_name());
			    results.put("category_title",category_details.getCategory_title());
			    results.put("category_image",category_details.getCategory_image_filename());
			    results.put("customer_name",customer_details.getCustomer_first_name()+" "+customer_details.getCustomer_last_name());
			    results.put("customer_mobile",String.valueOf(customer_details.getCustomer_mobile()));
			    results.put("customer_email",String.valueOf(customer_details.getCustomer_email()));

				
				resultArray.add(results);
			 
		 }	 

        return resultArray;
	}
	
	@PutMapping("/ticket/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable(value = "id") Long ticketId,
			@Valid @RequestBody Ticket ticketDetails) throws ResourceNotFoundException {
		final Ticket updatedTicket = ticketRepository.save(ticketDetails);
		return ResponseEntity.ok(updatedTicket);
	}

	@DeleteMapping("/ticket/{id}")
	public Map<String, Boolean> deleteTicket(@PathVariable(value = "id") Long ticketId)
			throws ResourceNotFoundException {
		Ticket ticket = ticketRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));

		ticketRepository.delete(ticket);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
