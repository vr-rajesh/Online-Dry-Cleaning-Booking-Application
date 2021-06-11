package com.cg.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.cg.entities.Customer;
import com.cg.exception.CustomerNotFoundException;
import com.cg.services.CustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	CustomerService customerService;

	/**
	 * Adding a customer to database
	 * 
	 * @throws CustomerNotFoundException
	 * http://localhost:9000/api/customer
	 */
	@PostMapping
	public ResponseEntity<Customer> addCustomer(@Valid @RequestBody Customer customer, BindingResult bindingResult)
			throws Exception {

		logger.info("Called POST mapping addCustomer() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Customer information provided is not valid, please try again!");
		}

		return new ResponseEntity<>(customerService.addCustomer(customer), HttpStatus.CREATED);
	}

	/**
	 * Remove an existing activity from database, else throw
	 * CustomerNotFoundException
	 */
	@DeleteMapping("/{userId}")
	public ResponseEntity<Customer> removeCustomer(@PathVariable("userId") Long id) throws CustomerNotFoundException {
		logger.info("Called DELETE mapping removeCustomer() method");
		return new ResponseEntity<Customer>(customerService.removeCustomer(id), HttpStatus.OK);

	}

	/**
	 * Update existing record of customer in database, else throw
	 * CustomerNotFoundException
	 */
	@PutMapping
	public ResponseEntity<Customer> updateCustomer(@Valid @RequestBody Customer customer, BindingResult bindingResult)
			throws CustomerNotFoundException, Exception {
		logger.info("Called PUT mapping updateCustomer() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Customer information provided is not valid, please try again!");
		}
		return new ResponseEntity<Customer>(customerService.updateCustomer(customer.getUserId(), customer),
				HttpStatus.ACCEPTED);

	}

	/**
	 * Get list of all Customers
	 * http://localhost:9000/api/customer
	 */
	@GetMapping
	public ResponseEntity<List<Customer>> getAllCustomers() {
		logger.info("Called GET mapping getAllCustomer() method");
		List<Customer> allCustomers = customerService.getAllCustomers();
		ResponseEntity<List<Customer>> entity = new ResponseEntity<List<Customer>>(allCustomers, HttpStatus.OK);
		return entity;
	}

	/**
	 * Get list of all customers by ID
	 */
	@GetMapping("/{userId}")
	public ResponseEntity<Customer> getCustomer(@PathVariable("userId") Long id) throws CustomerNotFoundException {
		logger.info("Called GET mapping getCustomer() method");

		return new ResponseEntity<Customer>(customerService.getCustomer(id), HttpStatus.OK);
	}

}
