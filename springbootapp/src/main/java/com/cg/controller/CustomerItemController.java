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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entities.CustomerItem;
import com.cg.exception.CustomerNotFoundException;
import com.cg.exception.ItemNotFoundException;
import com.cg.services.CustomerItemService;

@RestController
@RequestMapping(value = "/customerItem")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerItemController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private CustomerItemService customerItemService;

	/**
	 * Adding an Item to database
	 * 
	 * @throws Exception
	 * http://localhost:9000/customerItem
	 */
	@PostMapping
	public ResponseEntity<CustomerItem> addItem(@Valid @RequestBody CustomerItem item, BindingResult bindingResult)
			throws Exception {
		logger.info("Called POST mapping addItem() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Customer Item details provided is not valid, please try again!");
		}
		return new ResponseEntity<CustomerItem>(customerItemService.addItem(item), HttpStatus.CREATED);

	}

	/**
	 * Get item by ID
	 */
	@GetMapping("/{itemId}")
	public ResponseEntity<CustomerItem> getItem(@PathVariable("itemId") Long itemId) throws ItemNotFoundException {
		logger.info("Called GET mapping getItem() method");
		return new ResponseEntity<CustomerItem>(customerItemService.getItem(itemId), HttpStatus.OK);
	}

	/**
	 * Remove an existing activity from database, else throw ItemNotFoundException
	 */
	@DeleteMapping("/{itemId}")
	public ResponseEntity<CustomerItem> removeItem(@PathVariable("itemId") Long itemId) throws ItemNotFoundException {
		logger.info("Called DELETE mapping removeItem() method");
		return new ResponseEntity<CustomerItem>(customerItemService.removeItem(itemId), HttpStatus.OK);
	}

	/**
	 * Update existing record of customerItem in database, else throw
	 * ItemNotFoundException
	 */
	@PutMapping
	public ResponseEntity<CustomerItem> updateItem(@Valid @RequestBody CustomerItem item, BindingResult bindingResult)
			throws ItemNotFoundException, Exception {
		logger.info("Called PUT mapping updateItem() method");
		if (bindingResult.hasErrors()) {
			throw new Exception("Customer Item details provided is not valid, please try again!");
		}
		return new ResponseEntity<CustomerItem>(customerItemService.updateItem(item.getItemId(), item), HttpStatus.OK);
	}

	/**
	 * Get list of items by customer
	 */
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<List<CustomerItem>> getItemsByCustomer(@PathVariable("customerId") Long customerId)
			throws CustomerNotFoundException {
		logger.info("Called GET mapping getItemsByCustomer() method");
		List<CustomerItem> itemsByCustomer = customerItemService.getItemsByCustomer(customerId);
		ResponseEntity<List<CustomerItem>> entity = new ResponseEntity<List<CustomerItem>>(itemsByCustomer,
				HttpStatus.OK);
		return entity;
	}

}