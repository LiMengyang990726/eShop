package com.example.demo.service.impl;

import com.example.demo.model.Cart;
import com.example.demo.model.Customer;
import com.example.demo.repo.CartRepo;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    private CartRepo cartRepo;

    @Autowired
    public CartServiceImpl(CartRepo cartRepo) {
        this.cartRepo = cartRepo;
    }

    @Override
    public List<Cart> findAll(){
        return cartRepo.findAll();
    }

    @Override
    public List<Cart> getAllCartsByCustomerID(String customerID){
        return cartRepo.findByCustomerID(customerID);
    }

    @Override
    public List<Cart> getAllCartsByProductID(int productID){
        return cartRepo.findByProductID(productID);
    }

    @Override
    public Cart save(Cart cart){
        return cartRepo.save(cart);
    }
}
