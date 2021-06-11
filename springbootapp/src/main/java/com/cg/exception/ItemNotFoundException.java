package com.cg.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ItemNotFoundException extends Exception {

	private static final Logger logger = LoggerFactory.getLogger(ItemNotFoundException.class);
	private static final long serialVersionUID = 1L;

	public ItemNotFoundException(String message) {
		super(message);
		logger.info(message);
	}

}