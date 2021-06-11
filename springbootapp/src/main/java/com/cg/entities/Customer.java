package com.cg.entities;

import java.time.LocalDate;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;

	@Size(min = 4, max = 30, message = "please enter correct username")
	private String username;

	@Size(min = 4, max = 30, message = "please enter correct username")
	private String password;

	@NotNull(message = "name cannot be null")
	@Size(min = 4, max = 30, message = "please enter correct name")
	private String name;

	@Column(unique = true)
	@Email
	private String email;

	@NotNull(message = "contact number cannot be null")
	@Min(1000000000)
	private long contactNo;

	@Past
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@Size(min = 8, max = 2000, message = "please enter correct address")
	private String address;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CustomerItem> customerItems;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<MyOrder> orders;

	public Customer() {
		super();
	}

	public Customer(Long userId, @Size(min = 4, max = 30, message = "please enter correct username") String username,
			@Size(min = 4, max = 30, message = "please enter correct username") String password,
			@NotNull(message = "name cannot be null") @Size(min = 4, max = 30, message = "please enter correct name") String name,
			@Email String email, @NotNull(message = "contact number cannot be null") @Min(1000000000) long contactNo,
			@Past LocalDate dob, @Size(min = 8, max = 2000, message = "please enter correct address") String address,
			List<CustomerItem> customerItems, List<MyOrder> orders) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
		this.dob = dob;
		this.address = address;
		this.customerItems = customerItems;
		this.orders = orders;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<CustomerItem> getCustomerItems() {
		return customerItems;
	}

	public void setCustomerItems(List<CustomerItem> customerItems) {
		this.customerItems = customerItems;
	}

	public List<MyOrder> getOrders() {
		return orders;
	}

	public void setOrders(List<MyOrder> orders) {
		this.orders = orders;
	}

}