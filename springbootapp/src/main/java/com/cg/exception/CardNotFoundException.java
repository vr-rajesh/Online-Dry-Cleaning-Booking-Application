package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CardNotFoundException extends Exception {
	private static final Logger logger = LoggerFactory.getLogger(CardNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public CardNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}