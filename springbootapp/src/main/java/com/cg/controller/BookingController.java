package com.cg.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entities.Booking;
import com.cg.exception.BookingNotFoundException;
import com.cg.exception.CustomerNotFoundException;
import com.cg.services.BookingService;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private BookingService bookingService;

	/**
	 * Adding a booking to database
	 * 
	 * @throws Exception
	 * http://localhost:9000/api/booking
	 */
	@PostMapping
	public ResponseEntity<Booking> addBooking(@Valid @RequestBody Booking booking, BindingResult bindingResult)
			throws Exception {
		logger.info("Called POST mapping addBooking() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Booking details provided is not valid, please try again!");
		}
		return new ResponseEntity<>(bookingService.addBooking(booking), HttpStatus.CREATED);
	}

	/**
	 * Remove an existing activity from database, else throw
	 * BookingNotFoundException
	 */
	@DeleteMapping("/{bookingId}")
	public ResponseEntity<Booking> removeBooking(@PathVariable("bookingId") Long id) throws BookingNotFoundException {
		logger.info("Called DELETE mapping removeBooking() method");
		return new ResponseEntity<Booking>(bookingService.removeBooking(id), HttpStatus.OK);

	}

	/**
	 * Update existing record of booking in database, else throw
	 * BookingNotFoundException
	 */
	@PutMapping
	public ResponseEntity<Booking> updateBooking(@Valid @RequestBody Booking booking, BindingResult bindingResult)
			throws BookingNotFoundException, Exception {
		logger.info("Called PUT mapping updateBooking() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Booking details provided is not valid, please try again!");
		}
		return new ResponseEntity<Booking>(bookingService.updateBooking(booking.getBookingId(), booking),
				HttpStatus.ACCEPTED);

	}

	@GetMapping("/book/{bookingId}")
	public ResponseEntity<Booking> getBooking(@PathVariable("bookingId") Long id) throws BookingNotFoundException {

		logger.info("Called GET mapping getBooking() method");
		return new ResponseEntity<Booking>(bookingService.getBooking(id), HttpStatus.OK);
	}

	/**
	 * Get list of all bookings
	 */
	@GetMapping
	public ResponseEntity<List<Booking>> getAllBooking() {
		logger.info("Called GET mapping getAllBooking() method");
		List<Booking> allBookings = bookingService.getAllBooking();
		ResponseEntity<List<Booking>> entity = new ResponseEntity<List<Booking>>(allBookings, HttpStatus.OK);
		return entity;
	}

	/**
	 * Get list of all bookings by dates
	 */
	@GetMapping("/date")
	public ResponseEntity<List<Booking>> getBookingsByDate() {
		logger.info("Called GET mapping getAllBookingByDate() method");
		List<Booking> bookingsByDate = bookingService.getBookingsByDate();
		ResponseEntity<List<Booking>> entity = new ResponseEntity<List<Booking>>(bookingsByDate, HttpStatus.OK);
		return entity;

	}

	/**
	 * Get bookings by customer
	 */
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<List<Booking>> getBookingsByCustomer(@PathVariable("customerId") Long customerId)
			throws CustomerNotFoundException {
		logger.info("Called GET mapping getAllBookingCustomer() method");
		List<Booking> bookingsByCustomer = bookingService.getBookingsByCustomer(customerId);
		ResponseEntity<List<Booking>> entity = new ResponseEntity<List<Booking>>(bookingsByCustomer, HttpStatus.OK);
		return entity;
	}

}
