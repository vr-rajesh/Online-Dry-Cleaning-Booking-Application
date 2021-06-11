package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PaymentNotFoundException extends Exception {

	private static final Logger logger = LoggerFactory.getLogger(PaymentNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public PaymentNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}