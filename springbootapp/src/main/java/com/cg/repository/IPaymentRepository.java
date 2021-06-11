package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.entities.Payment;

public interface IPaymentRepository extends JpaRepository<Payment, Long> {

}
