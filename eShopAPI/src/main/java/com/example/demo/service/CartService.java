package com.example.demo.service;

import com.example.demo.model.Cart;
import com.example.demo.model.Customer;

import java.util.List;

public interface CartService {
    List<Cart> findAll();

    List<Cart> getAllCartsByCustomerID(String customerID);

    List<Cart> getAllCartsByProductID(int productID);

    Cart save(Cart cart);
}
