package com.project.helpdesksystem.model;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "ticket")
@Entity(name = "ticket")

public class Ticket {

	private long ticket_id;
	private String ticket_user_id;
	private String ticket_type_id;
	private String ticket_status_id;
	private String ticket_title;
	private String ticket_description;
	
	public Ticket() {
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getTicket_id() {
		return ticket_id;
	}

	public String getTicket_user_id() {
		return ticket_user_id;
	}

	public void setTicket_user_id(String ticket_user_id) {
		this.ticket_user_id = ticket_user_id;
	}

	public String getTicket_type_id() {
		return ticket_type_id;
	}

	public void setTicket_type_id(String ticket_type_id) {
		this.ticket_type_id = ticket_type_id;
	}

	public String getTicket_status_id() {
		return ticket_status_id;
	}

	public void setTicket_status_id(String ticket_status_id) {
		this.ticket_status_id = ticket_status_id;
	}

	public String getTicket_title() {
		return ticket_title;
	}

	public void setTicket_title(String ticket_title) {
		this.ticket_title = ticket_title;
	}

	public String getTicket_description() {
		return ticket_description;
	}

	public void setTicket_description(String ticket_description) {
		this.ticket_description = ticket_description;
	}

	public void setTicket_id(long ticket_id) {
		this.ticket_id = ticket_id;
	}

	@Override
	public String toString() {
		return "Ticket [ticket_id=" + ticket_id + ", ticket_user_id=" + ticket_user_id + ", ticket_type_id="
				+ ticket_type_id + ", ticket_status_id=" + ticket_status_id + ", ticket_title=" + ticket_title
				+ ", ticket_description=" + ticket_description + "]";
	}

	public Ticket(long ticket_id, String ticket_user_id, String ticket_type_id, String ticket_status_id,
			String ticket_title, String ticket_description) {
		super();
		this.ticket_id = ticket_id;
		this.ticket_user_id = ticket_user_id;
		this.ticket_type_id = ticket_type_id;
		this.ticket_status_id = ticket_status_id;
		this.ticket_title = ticket_title;
		this.ticket_description = ticket_description;
	}
}
