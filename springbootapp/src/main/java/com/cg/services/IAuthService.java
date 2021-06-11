package com.cg.services;

import com.cg.entities.Admin;
import com.cg.entities.Customer;

public interface IAuthService 
{
	 Admin loginAdmin(Long username,String password);
	 Customer loginCustomer(Long username,String password);
}
