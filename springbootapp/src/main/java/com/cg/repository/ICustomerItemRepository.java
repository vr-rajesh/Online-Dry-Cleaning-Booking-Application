package com.cg.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.entities.CustomerItem;
import com.cg.exception.CustomerNotFoundException;
/**
 * User defined repository functions for CustomerItem repository
 */
public interface ICustomerItemRepository extends JpaRepository<CustomerItem, Long> {
	
	/**
	 * Get a all customersItem based on customer date
	 */
	@Query("SELECT item FROM CustomerItem item WHERE item.customer.userId = :customerId")
	public List<CustomerItem> getItemsByCustomer(@Param(value = "customerId") Long customerId) throws CustomerNotFoundException;
}