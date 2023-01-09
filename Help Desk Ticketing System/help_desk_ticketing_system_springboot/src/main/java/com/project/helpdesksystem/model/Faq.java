package com.project.helpdesksystem.model;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "faq")
@Entity(name = "faq")

public class Faq {

	private long faq_id;
	private String faq_question;
	private String faq_answer;
	
	public Faq() {
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getFaq_id() {
		return faq_id;
	}

	public String getFaq_question() {
		return faq_question;
	}

	public void setFaq_question(String faq_question) {
		this.faq_question = faq_question;
	}

	public String getFaq_answer() {
		return faq_answer;
	}

	public void setFaq_answer(String faq_answer) {
		this.faq_answer = faq_answer;
	}

	public void setFaq_id(long faq_id) {
		this.faq_id = faq_id;
	}

	@Override
	public String toString() {
		return "Faq [faq_id=" + faq_id + ", faq_question=" + faq_question + ", faq_answer=" + faq_answer + "]";
	}

	public Faq(long faq_id, String faq_question, String faq_answer) {
		super();
		this.faq_id = faq_id;
		this.faq_question = faq_question;
		this.faq_answer = faq_answer;
	}

	
}
