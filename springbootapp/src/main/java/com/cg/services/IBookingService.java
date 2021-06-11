package com.cg.services;

import java.util.List;

import com.cg.entities.Booking;
import com.cg.exception.BookingNotFoundException;
import com.cg.exception.CustomerNotFoundException;

public interface IBookingService {

	public Booking addBooking(Booking booking);

	public Booking removeBooking(Long bookingId) throws BookingNotFoundException;

	public Booking updateBooking(Long bookingId, Booking booking) throws BookingNotFoundException;

	public Booking getBooking(Long bookingId) throws BookingNotFoundException;

	public List<Booking> getAllBooking();

	public List<Booking> getBookingsByDate();

	public List<Booking> getBookingsByCustomer(Long customerId)throws CustomerNotFoundException;

}
