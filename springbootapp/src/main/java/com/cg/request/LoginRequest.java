package com.cg.request;

public class LoginRequest {

	private String username;

	private String password;

	private String choice;

	
	public LoginRequest() {
		super();
	}

	public LoginRequest(String username, String password, String choice) {
		super();
		this.username = username;
		this.password = password;
		this.choice = choice;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getChoice() {
		return choice;
	}

	public void setChoice(String choice) {
		this.choice = choice;
	}

}
