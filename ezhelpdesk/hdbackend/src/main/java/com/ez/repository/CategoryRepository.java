package com.ez.repository;

import com.ez.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
//@Transactional
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
