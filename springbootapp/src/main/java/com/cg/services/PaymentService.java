package com.cg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.Payment;
import com.cg.exception.PaymentNotFoundException;
import com.cg.repository.IPaymentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class PaymentService implements IPaymentService {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private IPaymentRepository paymentRepository;

	@Override
	public Payment addPayment(Payment payment) {
		logger.info("Called addPayment() method of PaymentService");

		return paymentRepository.save(payment);
	}

	@Override
	public Payment removePayment(long paymentId) throws PaymentNotFoundException {
		logger.info("Called removePayment() method of PaymentService");

		Optional<Payment> searchedPayment = paymentRepository.findById(paymentId);
		if (searchedPayment.isPresent()) {
			Payment paymentToDelete = searchedPayment.get();
			paymentRepository.delete(paymentToDelete);
			return paymentToDelete;
		} else {
			throw new PaymentNotFoundException("Payment you are trying to delete is not available");
		}

	}

	@Override
	public Payment updatePayment(long paymentId, Payment payment) throws PaymentNotFoundException {
		logger.info("Called updatePayment() method of PaymentService");
		Optional<Payment> searchedPayment = paymentRepository.findById(paymentId);
		if (searchedPayment.isPresent()) {
			return paymentRepository.save(payment);
		} else {
			throw new PaymentNotFoundException("Payment you are trying to update is not available");
		}

	}

	@Override
	public Payment getPayment(long paymentid) throws PaymentNotFoundException {
		logger.info("Called getPayment() method of PaymentService");
		Optional<Payment> searchedPayment = paymentRepository.findById(paymentid);
		if (searchedPayment.isPresent()) {
			return searchedPayment.get();
		} else {
			throw new PaymentNotFoundException("Payment you are trying to view is not available");
		}

	}

	@Override
	public List<Payment> getAllPaymentDetails() {
		logger.info("Called getAllPaymentDetails() method of PaymentService");
		return paymentRepository.findAll();
	}

}
