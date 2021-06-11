package com.cg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.Customer;
import com.cg.exception.CustomerNotFoundException;
import com.cg.repository.ICustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class CustomerService implements ICustomerService {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ICustomerRepository customerRepository;

	@Override
	public Customer addCustomer(Customer customer) {
		logger.info("Called addCustomer() method of CustomerService");

		return customerRepository.save(customer);
	}

	@Override
	public Customer removeCustomer(Long userId) throws CustomerNotFoundException {
		logger.info("Called removeCustomer() method of CustomerService");
		Optional<Customer> searchedCustomer = customerRepository.findById(userId);
		if (searchedCustomer.isPresent()) {
			Customer customerToDelete = searchedCustomer.get();
			customerRepository.delete(customerToDelete);
			return customerToDelete;
		} else {
			throw new CustomerNotFoundException("Customer you are trying to delete is not available");
		}
	}

	@Override
	public Customer updateCustomer(Long userId, Customer customer) throws CustomerNotFoundException {
		logger.info("Called updateCustomer() method of CustomerService");
		Optional<Customer> searchedCustomer = customerRepository.findById(userId);
		if (searchedCustomer.isPresent()) {
			return customerRepository.save(customer);
		} else {
			throw new CustomerNotFoundException("Customer you are trying to update is not available");
		}
	}

	@Override
	public Customer getCustomer(Long userId) throws CustomerNotFoundException {
		logger.info("Called getCustomer() method of CustomerService");
		Optional<Customer> searchedCustomer = customerRepository.findById(userId);
		if (searchedCustomer.isPresent()) {
			return searchedCustomer.get();
		} else {
			throw new CustomerNotFoundException("Customer you are trying to view is not available");
		}
	}

	@Override
	public List<Customer> getAllCustomers() {
		logger.info("Called getAllCustomers() method of CustomerService");
		return customerRepository.findAll();
	}

}