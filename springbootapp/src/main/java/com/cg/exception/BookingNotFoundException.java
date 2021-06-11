package com.cg.exception;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

public class BookingNotFoundException extends Exception {

	private static final Logger logger = LoggerFactory.getLogger(BookingNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public BookingNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}
