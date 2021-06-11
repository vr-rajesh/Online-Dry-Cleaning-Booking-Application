package com.cg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.request.LoginRequest;
import com.cg.services.AuthService;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

	@Autowired
	public AuthService authService;

	@PostMapping("/login")
	public String login(@RequestBody LoginRequest userdetails){
		Object obj = null;
		switch (userdetails.getChoice()) {
		case "admin":
			obj = authService.loginAdmin(Long.parseLong(userdetails.getUsername()) , userdetails.getPassword());
			break;
		case "customer":
			obj = authService.loginCustomer(Long.parseLong(userdetails.getUsername()), userdetails.getPassword());
			break;
		default:
			return "Wrong choice entered!";
		}
		if (obj != null)
			return "Login successfull";
		else
			return "Id or password is incorrect";
	}

}
