package com.cg.services;

import java.util.List;

import com.cg.entities.Customer;
import com.cg.exception.CustomerNotFoundException;

public interface ICustomerService {

	public Customer addCustomer(Customer customer);

	public Customer removeCustomer(Long userId) throws CustomerNotFoundException;

	public Customer updateCustomer(Long userId, Customer customer) throws CustomerNotFoundException;

	public Customer getCustomer(Long userId) throws CustomerNotFoundException;

	public List<Customer> getAllCustomers();

}