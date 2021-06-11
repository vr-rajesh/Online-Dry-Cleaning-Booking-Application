package com.cg.services;

import org.slf4j.Logger;


import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.Booking;
import com.cg.entities.Customer;
import com.cg.exception.BookingNotFoundException;
import com.cg.exception.CustomerNotFoundException;
import com.cg.repository.ICustomerRepository;
import com.cg.repository.IBookingRepository;

@Service
public class BookingService implements IBookingService {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private IBookingRepository bookingRepository;

	@Autowired
	private ICustomerRepository customerRespository;

	@Override
	public Booking addBooking(Booking booking) {
		logger.info("Called addBooking() method of BookingService");

		return bookingRepository.save(booking);
	}

	@Override
	public Booking removeBooking(Long bookingId) throws BookingNotFoundException {
		logger.info("Called removeBooking() method of BookingService");
		Optional<Booking> searchedBooking = bookingRepository.findById(bookingId);
		if (searchedBooking.isPresent()) {
			Booking bookingToDelete = searchedBooking.get();
			bookingRepository.delete(bookingToDelete);
			return bookingToDelete;
		} else {
			throw new BookingNotFoundException("Booking you are trying to delete is not available");
		}
	}

	@Override
	public Booking updateBooking(Long bookingId, Booking booking) throws BookingNotFoundException {
		logger.info("Called updateBooking() method of BookingService");
		Optional<Booking> searchedBooking = bookingRepository.findById(bookingId);
		if (searchedBooking.isPresent()) {
			return bookingRepository.save(booking);
		} else {
			throw new BookingNotFoundException("Booking you are trying to update is not available");
		}
	}

	@Override
	public Booking getBooking(Long bookingId) throws BookingNotFoundException {
		logger.info("Called getBooking() method of BookingService");
		Optional<Booking> searchedBooking = bookingRepository.findById(bookingId);
		if (searchedBooking.isPresent()) {
			return searchedBooking.get();
		} else {
			throw new BookingNotFoundException("Booking you are trying to view is not available");
		}
	}

	@Override
	public List<Booking> getAllBooking() {
		logger.info("Called getAllBooking() method of BookingService");
		return bookingRepository.findAll();
	}

	@Override
	public List<Booking> getBookingsByDate() {
		logger.info("Called getBookingsByDate() method of BookingService");
		return bookingRepository.getBookingsByDate();
	}

	@Override
	public List<Booking> getBookingsByCustomer(Long customerId) throws CustomerNotFoundException {
		logger.info("Called getBookingsByCustomer() method of BookingService");
		Optional<Customer> searchedCustomer = customerRespository.findById(customerId);
		if (searchedCustomer.isPresent()) {
			return bookingRepository.getBookingsByCustomer(customerId);
		} else {
			throw new CustomerNotFoundException("Customer Bookings you are trying to view is not available");
		}

	}

}
