package com.example.demo;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VendorController {
	
	@Autowired
	VendorService service;
	
	@Autowired
	private VendorDAO dao;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "showvendors")
	public List<Vendor> showVendors() {
		return service.showVendors();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "searchvendorbyid/{id}")
	public ResponseEntity<Vendor> searchVendorById(@PathVariable int id) {
		try {
			Vendor vendor = service.searchVendorById(id);
			return new ResponseEntity<Vendor>(vendor, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Vendor>(HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "vendorLogin/{username}/{password}")
	public String vendorAuthentication(@PathVariable String username, @PathVariable String password) {
		return service.vendorAuthentication(username, password);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "searchvendorbyusername/{username}")
	public Vendor searchVendorByUsername(@PathVariable String username) {
		return service.searchVendorByUsername(username);
	}
}
