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

import com.cg.entities.MyOrder;
import com.cg.exception.OrderNotFoundException;
import com.cg.services.OrderService;

@RestController
@RequestMapping(value = "/api/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private OrderService orderService;

	/**
	 * Adding an order to database
	 * @throws Exception 
	 * http://localhost:9000/api/order
	 */
	@PostMapping
	public ResponseEntity<MyOrder> addOrder(@Valid @RequestBody MyOrder order,BindingResult bindingResult) throws Exception {
		logger.info("Called POST mapping addOrder() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Orders details provided is not valid, please try again!");
		}
		return new ResponseEntity<>(orderService.addOrder(order), HttpStatus.CREATED);
	}

	/**
	 * Remove an existing activity from database, else throw
	 * OrderNotFoundException
	 */
	@DeleteMapping("/{orderId}")
	public ResponseEntity<MyOrder> removeOrder(@PathVariable("orderId") int id) throws OrderNotFoundException {
		logger.info("Called DELETE mapping removeOrder() method");
		return new ResponseEntity<MyOrder>(orderService.removeOrder(id), HttpStatus.OK);

	}
	/**
	 * Update existing record of order in database, else throw
	 * OrderNotFoundException
	 */
	@PutMapping("/{orderId}")
	public ResponseEntity<MyOrder> updateOrder(@Valid @PathVariable("orderId") int id, @RequestBody MyOrder order,BindingResult bindingResult)
			throws OrderNotFoundException, Exception {
		logger.info("Called PUT mapping updateOrder() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Orders details provided is not valid, please try again!");
		}
		return new ResponseEntity<MyOrder>(orderService.updateOrder(id, order), HttpStatus.ACCEPTED);

	}

	/**
	 * Get orders by ID
	 */
	@GetMapping("/{orderId}")
	public ResponseEntity<MyOrder> getOrder(@PathVariable("orderId") int id) throws OrderNotFoundException {
		logger.info("Called GET mapping getOrder() method");

		return new ResponseEntity<MyOrder>(orderService.getOrder(id), HttpStatus.OK);
	}

	/**
	 * Get list of all orders
	 */
	@GetMapping
	public ResponseEntity<List<MyOrder>> getAllOrder() {
		logger.info("Called GET mapping getAllOrder() method");
		List<MyOrder> allOrders = orderService.getAllOrder();
		ResponseEntity<List<MyOrder>> entity = new ResponseEntity<List<MyOrder>>(allOrders, HttpStatus.OK);
		return entity;
	}

}