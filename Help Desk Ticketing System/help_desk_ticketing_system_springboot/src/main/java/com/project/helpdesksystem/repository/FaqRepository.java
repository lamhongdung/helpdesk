package com.project.helpdesksystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.helpdesksystem.model.Faq;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Long> {
	
	
	

}
