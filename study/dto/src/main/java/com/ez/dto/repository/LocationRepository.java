package com.ez.dto.repository;

import com.ez.dto.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
public interface LocationRepository extends JpaRepository<Location, Long> {
}
