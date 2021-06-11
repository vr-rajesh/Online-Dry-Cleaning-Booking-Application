package com.cg.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.checkerframework.checker.optional.qual.Present;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class MyOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;

	@NotNull(message = "amount cannot be null")
	private Double amount;

	@Present
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate billingDate;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Customer customer;

	@NotNull(message = "payment method cannot be null")
	private String paymentMethod;

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

	public MyOrder() {
		super();
	}

	public MyOrder(int orderId, @NotNull(message = "amount cannot be null") Double amount,
			@Present LocalDate billingDate, Customer customer,
			@NotNull(message = "payment method cannot be null") String paymentMethod,
			@NotNull(message = "card name cannot be null") @Size(min = 2, max = 30, message = "please enter card name") String cardName,
			@NotNull(message = "card number cannot be null") String cardNumber, @Future LocalDate expiryDate,
			@NotNull(message = "bank name cannot be null") @Size(min = 2, max = 30, message = "please enter correct bank name") String bankName) {
		super();
		this.orderId = orderId;
		this.amount = amount;
		this.billingDate = billingDate;
		this.customer = customer;
		this.paymentMethod = paymentMethod;
		this.cardName = cardName;
		this.cardNumber = cardNumber;
		this.expiryDate = expiryDate;
		this.bankName = bankName;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(LocalDate billingDate) {
		this.billingDate = billingDate;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
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
