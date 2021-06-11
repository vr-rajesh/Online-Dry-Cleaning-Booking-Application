package com.cg.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull(message = "card name cannot be null")
	@Size(min = 2, max = 30, message = "please enter card name")
	private String cardName;

	@NotNull(message = "card number cannot be null")
	private String cardNumber;

	@Future
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate expiryDate;

	@NotNull(message = "bank name cannot be null")
	@Size(min = 2, max = 30, message = "please enter correct bank name")
	private String bankName;

	public Card(Long id,
			@NotNull(message = "card name cannot be null") @Size(min = 2, max = 30, message = "please enter card name") String cardName,
			@NotNull(message = "card number cannot be null") String cardNumber, @Future LocalDate expiryDate,
			@NotNull(message = "bank name cannot be null") @Size(min = 2, max = 30, message = "please enter correct bank name") String bankName) {
		super();
		this.id = id;
		this.cardName = cardName;
		this.cardNumber = cardNumber;
		this.expiryDate = expiryDate;
		this.bankName = bankName;
	}

	public Card() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

}
