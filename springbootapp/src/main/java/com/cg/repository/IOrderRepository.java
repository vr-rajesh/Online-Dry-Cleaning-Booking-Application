package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.entities.MyOrder;

@Repository
public interface IOrderRepository extends JpaRepository<MyOrder, Integer> {

}