package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class VendorService {
	
	@Autowired
	VendorRepository repository;
	
	@Autowired
	JdbcTemplate jdbc;
	
	@Autowired
	private VendorDAO dao;
	
	public List<Vendor> showVendors() {
		return repository.findAll();
	}
	
	public Vendor searchVendorById(int id) {
		return repository.findById(id).get();
	}
	
	public String vendorAuthentication(String username, String password) {
		String cmd = "select count(*) cnt from vendor where VEN_USERNAME=? "
				+ " AND VEN_PASSWORD=?";
		List str = jdbc.query(cmd,new Object[] {username,password}, new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				return rs.getInt("cnt");
			}
			
		});
		return str.get(0).toString();
	}
	
	public Vendor searchVendorByUsername(String username) {
		return repository.searchVendorByUsername(username);
	}
	
}
