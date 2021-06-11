package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoginNotFoundException extends Exception {

	private static final Logger logger = LoggerFactory.getLogger(LoginNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public LoginNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}
