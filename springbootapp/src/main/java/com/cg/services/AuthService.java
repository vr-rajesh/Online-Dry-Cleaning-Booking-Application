package com.cg.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.Admin;
import com.cg.entities.Customer;
import com.cg.repository.IAdminRepository;
import com.cg.repository.ICustomerRepository;

@Service
public class AuthService implements IAuthService {

	@Autowired
	private IAdminRepository adminRepository;

	@Autowired
	private ICustomerRepository customerRepository;

	@Override
	public Admin loginAdmin(Long username, String password) {

//		Optional<Admin> admin = adminRepository.findByUsername(username);
		Optional<Admin> admin =	adminRepository.findById(username);
		if (!(admin.isEmpty()) && (admin.get().getPassword().equals(password))) {
			System.out.println("Welcome Admin " + admin.get().getUsername() + "! Sign In Successful");
			return admin.get();
		}
		return null;
	}

	@Override
	public Customer loginCustomer(Long username, String password) {

		//Optional<Customer> customer = customerRepository.findByUsername(username);
		Optional<Customer> customer = customerRepository.findById(username);
		if (!(customer.isEmpty()) && (customer.get().getPassword().equals(password))) {
			System.out.println("Welcome Admin " + customer.get().getUsername() + "! Sign In Successful");
			return customer.get();
		}
		return null;

	}

}
