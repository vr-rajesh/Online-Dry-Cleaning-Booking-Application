package com.cg.services;

import java.util.List;

import com.cg.entities.Payment;
import com.cg.exception.PaymentNotFoundException;

public interface IPaymentService {
	public Payment addPayment(Payment payment);

	public Payment removePayment(long paymentid) throws PaymentNotFoundException;

	public Payment updatePayment(long paymentid, Payment payment) throws PaymentNotFoundException;

	public Payment getPayment(long paymentid) throws PaymentNotFoundException;

	public List<Payment> getAllPaymentDetails();

//	public List<Payment> getPaymentsByDate();

}