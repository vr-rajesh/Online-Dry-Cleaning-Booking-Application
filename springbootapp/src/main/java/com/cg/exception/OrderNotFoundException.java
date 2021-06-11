package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderNotFoundException extends Exception {
	private static final Logger logger = LoggerFactory.getLogger(OrderNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public OrderNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}