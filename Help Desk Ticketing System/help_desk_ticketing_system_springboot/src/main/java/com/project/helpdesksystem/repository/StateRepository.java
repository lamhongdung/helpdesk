package com.project.helpdesksystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.helpdesksystem.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

}
