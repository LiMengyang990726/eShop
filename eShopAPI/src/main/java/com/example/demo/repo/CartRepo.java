package com.example.demo.repo;

import com.example.demo.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepo extends JpaRepository<Cart, String> {
    List<Cart> findAll();

    List<Cart> findByCustomerID(String customerID);

    List<Cart> findByProductID(int productID);

    Cart save(Cart cart);
}
