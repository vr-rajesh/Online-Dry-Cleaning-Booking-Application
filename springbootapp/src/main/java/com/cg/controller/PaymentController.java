package com.cg.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entities.Payment;
import com.cg.exception.PaymentNotFoundException;
import com.cg.services.PaymentService;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private PaymentService paymentService;

	/**
	 * Adding a payment to database
	 * 
	 * @throws Exception
	 * http://localhost:9000/api/payment
	 */
	@PostMapping
	public ResponseEntity<Payment> addPayment(@Valid @RequestBody Payment payment, BindingResult bindingResult)
			throws Exception {
		logger.info("Called POST mapping addPayment() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Payment details provided is not valid, please try again!");
		}
		return new ResponseEntity<>(paymentService.addPayment(payment), HttpStatus.CREATED);
	}

	/**
	 * Remove an existing activity from database, else throw
	 * PaymentNotFoundException
	 */
	@DeleteMapping("/{paymentId}")
	public ResponseEntity<Payment> removePayment(@PathVariable("paymentId") Long id) throws PaymentNotFoundException {
		logger.info("Called DELETE mapping removePayment() method");
		return new ResponseEntity<Payment>(paymentService.removePayment(id), HttpStatus.OK);

	}

	/**
	 * Update existing record of payment in database, else throw
	 * PaymentNotFoundException
	 */
	@PutMapping
	public ResponseEntity<Payment> updatePayment(@Valid @RequestBody Payment payment, BindingResult bindingResult)
			throws PaymentNotFoundException, Exception {
		logger.info("Called PUT mapping updatePayment() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Payment details provided is not valid, please try again!");
		}
		return new ResponseEntity<Payment>(paymentService.updatePayment(payment.getPaymentId(), payment),
				HttpStatus.ACCEPTED);

	}

	/**
	 * Get payment by ID
	 */
	@GetMapping("/{paymentId}")
	public ResponseEntity<Payment> getPayment(@PathVariable("paymentId") Long id) throws PaymentNotFoundException {
		logger.info("Called GET mapping getPayment() method");

		return new ResponseEntity<Payment>(paymentService.getPayment(id), HttpStatus.OK);
	}

	/**
	 * Get list of all payments
	 */
	@GetMapping
	public ResponseEntity<List<Payment>> getAllPaymentDetails() {
		logger.info("Called GET mapping getAllPaymentDetails() method");
		List<Payment> allPayments = paymentService.getAllPaymentDetails();
		ResponseEntity<List<Payment>> entity = new ResponseEntity<List<Payment>>(allPayments, HttpStatus.OK);
		return entity;
	}

}
