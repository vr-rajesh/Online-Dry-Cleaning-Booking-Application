package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CustomerNotFoundException extends Exception {

	private static final Logger logger = LoggerFactory.getLogger(CustomerNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public CustomerNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}
