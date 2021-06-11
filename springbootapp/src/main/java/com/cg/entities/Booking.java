package com.cg.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bookingId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate bookingDate;

	private LocalTime bookingTime;

	@NotNull(message = "service type cannot be null")
	@Size(min = 2, max = 20, message = "please enter correct service type")
	private String serviceType;

//	@JsonBackReference
//	@ManyToOne
//	@JoinColumn(name = "user_id")
	@OneToOne
	private Customer customer;

	public Booking() {
	}

	public Booking(Long bookingId, LocalDate bookingDate, LocalTime bookingTime,
			@NotNull(message = "service type cannot be null") @Size(min = 2, max = 20, message = "please enter correct service type") String serviceType,
			Customer customer) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.bookingTime = bookingTime;
		this.serviceType = serviceType;
		this.customer = customer;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public LocalTime getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(LocalTime bookingTime) {
		this.bookingTime = bookingTime;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}