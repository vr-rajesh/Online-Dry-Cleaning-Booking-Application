package com.cg.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long paymentId;

	@NotNull(message = "payment status cannot be null")
	private String status;

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

	public Payment() {
		super();
	}

	public Payment(Long paymentId, @NotNull(message = "payment status cannot be null") String status,
			@NotNull(message = "card name cannot be null") @Size(min = 2, max = 30, message = "please enter card name") String cardName,
			@NotNull(message = "card number cannot be null") String cardNumber, @Future LocalDate expiryDate,
			@NotNull(message = "bank name cannot be null") @Size(min = 2, max = 30, message = "please enter correct bank name") String bankName) {
		super();
		this.paymentId = paymentId;
		this.status = status;
		this.cardName = cardName;
		this.cardNumber = cardNumber;
		this.expiryDate = expiryDate;
		this.bankName = bankName;
	}

	public Long getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Long paymentId) {
		this.paymentId = paymentId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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