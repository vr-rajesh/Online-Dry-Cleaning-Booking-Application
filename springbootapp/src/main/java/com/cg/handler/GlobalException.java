package com.cg.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.exception.BookingNotFoundException;
import com.cg.exception.CardNotFoundException;
import com.cg.exception.CustomerNotFoundException;
import com.cg.exception.ItemNotFoundException;
import com.cg.exception.LoginNotFoundException;
import com.cg.exception.OrderNotFoundException;
import com.cg.exception.PaymentNotFoundException;

@RestControllerAdvice
public class GlobalException {
	@ExceptionHandler(BookingNotFoundException.class)
	public ResponseEntity<String> handleBookingExceptionNotFound(BookingNotFoundException bnf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(bnf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(CustomerNotFoundException.class)
	public ResponseEntity<String> handleCustomerExceptionNotFound(CustomerNotFoundException cnf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(cnf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(ItemNotFoundException.class)
	public ResponseEntity<String> handleCustomerItemExceptionNotFound(ItemNotFoundException inf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(inf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(PaymentNotFoundException.class)
	public ResponseEntity<String> handlePaymentExceptionNotFound(PaymentNotFoundException pnf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(pnf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(CardNotFoundException.class)
	public ResponseEntity<String> handleCardExceptionNotFound(CardNotFoundException cnf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(cnf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<String> handleOrderExceptionNotFound(OrderNotFoundException onf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(onf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}

	@ExceptionHandler(LoginNotFoundException.class)
	public ResponseEntity<String> handleOrderExceptionNotFound(LoginNotFoundException lnf) {
		ResponseEntity<String> entity = new ResponseEntity<String>(lnf.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> validationException(Exception e) {
		ResponseEntity<String> entity = new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
		return entity;
	}
}