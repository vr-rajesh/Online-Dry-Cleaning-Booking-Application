package com.cg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.entities.MyOrder;
import com.cg.exception.OrderNotFoundException;
import com.cg.repository.IOrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
public class OrderService implements IOrderService {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private IOrderRepository orderRepository;

	@Override
	public MyOrder addOrder(MyOrder order) {
		logger.info("Called addOrder() method of OrderService");

		return orderRepository.save(order);
	}

	@Override
	public MyOrder removeOrder(int id) throws OrderNotFoundException {
		logger.info("Called removeOrder() method of OrderService");
		Optional<MyOrder> searchedOrder = orderRepository.findById(id);
		if (searchedOrder.isPresent()) {
			MyOrder orderToDelete = searchedOrder.get();
			orderRepository.delete(orderToDelete);
			return orderToDelete;
		} else {
			throw new OrderNotFoundException("Order you are trying to delete is not available");
		}
	}

	@Override
	public MyOrder updateOrder(int id, MyOrder order) throws OrderNotFoundException {
		logger.info("Called updateOrder() method of OrderService");
		Optional<MyOrder> searchedOrder = orderRepository.findById(id);
		if (searchedOrder.isPresent()) {
			return orderRepository.save(order);
		} else {
			throw new OrderNotFoundException("Order you are trying to update is not available");
		}
	}

	@Override
	public MyOrder getOrder(int id) throws OrderNotFoundException {
		logger.info("Called getOrder() method of OrderService");
		Optional<MyOrder> searchedOrder = orderRepository.findById(id);
		if (searchedOrder.isPresent()) {
			return searchedOrder.get();
		} else {
			throw new OrderNotFoundException("Order you are trying to view is not available");
		}
	}

	@Override
	public List<MyOrder> getAllOrder() {
		logger.info("Called getAllOrder() method of OrderService");
		return orderRepository.findAll();
	}

}