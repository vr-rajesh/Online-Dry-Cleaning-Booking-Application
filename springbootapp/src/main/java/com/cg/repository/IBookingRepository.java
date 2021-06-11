package com.cg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.query.Param;

import com.cg.entities.Booking;
import com.cg.exception.CustomerNotFoundException;
/**
 * User defined repository functions for Booking repository
 */
public interface IBookingRepository extends JpaRepository<Booking, Long> {

	/**
	 * Get a all bookings based on booking date
	 */
	@Query("SELECT booking FROM Booking booking ORDER BY booking.bookingDate DESC")
	public List<Booking> getBookingsByDate();
	
	/**
	 * Get a all bookings based on customer Id
	 */
	@Query("SELECT booking FROM Booking booking WHERE booking.customer.userId = :customerId")
	public List<Booking> getBookingsByCustomer(@Param(value = "customerId") Long customerId) throws CustomerNotFoundException;

}
