package com.project.helpdesksystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.helpdesksystem.model.Status;

@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {

}
