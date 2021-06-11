package com.cg.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long adminId;

	@NotNull(message = "username cannot be null")
	@Size(min = 4)
	private String username;

	@NotNull(message = "password cannot be null")
	@Size(min = 4, max = 10, message = "Password must be greater than or equal to 5 characters and less than 10 characters")
	@JsonIgnore
	private String password;

	
	public Admin() {
		super();
	}

	public Admin(Long adminId, @NotNull(message = "username cannot be null") @Size(min = 4) String username,
			@NotNull(message = "password cannot be null") @Size(min = 4, max = 10, message = "Password must be greater than or equal to 5 characters and less than 10 characters") String password) {
		super();
		this.adminId = adminId;
		this.username = username;
		this.password = password;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}