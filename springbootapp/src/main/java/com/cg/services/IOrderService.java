package com.cg.services;

import java.util.List;

import com.cg.entities.MyOrder;
import com.cg.exception.OrderNotFoundException;

public interface IOrderService {

	public MyOrder addOrder(MyOrder order);

	public MyOrder removeOrder(int orderId) throws OrderNotFoundException;

	public MyOrder updateOrder(int orderId, MyOrder order) throws OrderNotFoundException;

	public MyOrder getOrder(int orderId) throws OrderNotFoundException;

	public List<MyOrder> getAllOrder();
}