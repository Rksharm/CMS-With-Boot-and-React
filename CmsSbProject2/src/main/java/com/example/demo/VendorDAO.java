package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


@Repository
public class VendorDAO {

	@Autowired  
    JdbcTemplate jdbc;  
	
		public Vendor searchByVendorId(int vendorID) {
		String cmd ="select * from Vendor where VEN_ID=?";
		List<Vendor> venList = jdbc.query(cmd, new Object[] {vendorID}, new RowMapper<Vendor>() {

			@Override
			public Vendor mapRow(ResultSet rs, int rowNum) throws SQLException {
				Vendor ven = new Vendor();
				ven.setVenId(rs.getInt("VEN_ID"));
				ven.setVenName(rs.getString("VEN_NAME"));
				ven.setVenPhnNo(rs.getString("VEN_PHN_NO"));
				ven.setVenUsername(rs.getString("VEN_USERNAME"));
				ven.setVenPassword(rs.getString("VEN_PASSWORD"));
				ven.setVenEmail(rs.getString("VEN_EMAIL"));
				return ven;
			}
		});
		if (venList.size()==1) {
			return venList.get(0);
		}
		return null;
	}
	
	public String authenticate(String user,String pwd) {
		String cmd = "select count(*) cnt from Vendor where ven_Username=? "
				+ " AND Ven_Password=?";
		List str=jdbc.query(cmd,new Object[] {user,pwd}, new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				return rs.getInt("cnt");
			}
			
		});
		return str.get(0).toString();
	}
}
