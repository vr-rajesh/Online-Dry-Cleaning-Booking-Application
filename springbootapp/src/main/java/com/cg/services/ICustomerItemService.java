package com.cg.services;

import java.util.List;

import com.cg.entities.CustomerItem;
import com.cg.exception.CustomerNotFoundException;
import com.cg.exception.ItemNotFoundException;

public interface ICustomerItemService {
	public CustomerItem addItem(CustomerItem customerItem);

	public CustomerItem removeItem(Long id) throws ItemNotFoundException;

	public CustomerItem updateItem(Long id, CustomerItem customerItem) throws ItemNotFoundException;

	public CustomerItem getItem(Long id) throws ItemNotFoundException;
	public List<CustomerItem> getItemsByCustomer(Long customerId) throws CustomerNotFoundException;
}