package com.cg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.Customer;
import com.cg.entities.CustomerItem;
import com.cg.exception.CustomerNotFoundException;
import com.cg.exception.ItemNotFoundException;
import com.cg.repository.ICustomerItemRepository;
import com.cg.repository.ICustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class CustomerItemService implements ICustomerItemService {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private ICustomerItemRepository customerItemRepository;

	@Autowired
	private ICustomerRepository customerRepository;

	@Override
	public CustomerItem addItem(CustomerItem item) {
		logger.info("Called addItem() method of CustomerItemService");
		return customerItemRepository.save(item);
	}

	@Override
	public CustomerItem removeItem(Long id) throws ItemNotFoundException {
		logger.info("Called removeItem() method of CustomerItemService");
		Optional<CustomerItem> searchedItem = customerItemRepository.findById(id);
		if (searchedItem.isPresent()) {
			CustomerItem itemToDelete = searchedItem.get();
			customerItemRepository.delete(itemToDelete);
			return itemToDelete;
		} else {
			throw new ItemNotFoundException("Item With Given Id :" + id + " Not Available!");
		}
	}

	@Override
	public CustomerItem updateItem(Long id, CustomerItem item) throws ItemNotFoundException {
		logger.info("Called updateItem() method of CustomerItemService");
		Optional<CustomerItem> searchItem = customerItemRepository.findById(id);
		if (searchItem.isPresent()) {
			return customerItemRepository.save(item);
		} else {
			throw new ItemNotFoundException("Item With Given Id :" + id + " Not Available!");
		}
	}

	@Override
	public CustomerItem getItem(Long id) throws ItemNotFoundException {
		logger.info("Called getItem() method of CustomerItemService");
		Optional<CustomerItem> searchItem = customerItemRepository.findById(id);
		if (searchItem.isPresent()) {
			return searchItem.get();
		} else {
			throw new ItemNotFoundException("Item With Given Id :" + id + " Not Available!");
		}
	}

	@Override
	public List<CustomerItem> getItemsByCustomer(Long customerId) throws CustomerNotFoundException {
		logger.info("Called getItemsByCustomer() method of CustomerItemService");
		Optional<Customer> searchedCustomer = customerRepository.findById(customerId);
		if (searchedCustomer.isPresent()) {
			return customerItemRepository.getItemsByCustomer(customerId);
		} else {
			throw new CustomerNotFoundException("Items specified with given Id are not available");
		}

	}

}