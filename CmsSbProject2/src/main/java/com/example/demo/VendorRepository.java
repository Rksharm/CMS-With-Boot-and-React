package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

	@Query("from Vendor where venUsername=:username")
	public Vendor searchVendorByUsername(@Param("username") String username);
}




