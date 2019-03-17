package com.example.demo.controller;

import com.example.demo.model.Cart;
import com.example.demo.model.Customer;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Cart> getAllCarts() {
        List<Cart> carts= cartService.findAll();
        return carts;
    }

    @RequestMapping(value = "/customer/{customerID}", method = RequestMethod.GET)
    public List<Cart> getCartsByCustomerID(@PathVariable("customerID") String customerID){
        return cartService.getAllCartsByCustomerID(customerID);
    }

    @RequestMapping(value = "/product/{productID}", method = RequestMethod.GET)
    public List<Cart> getCartsByProductID(@PathVariable("productID") int productID){
        return cartService.getAllCartsByProductID(productID);
    }

    @RequestMapping(value = "/post/{cart}", method = RequestMethod.POST)
    public Cart addCart(@PathVariable("cart") Cart cart){
        return cartService.save(cart);
    }
}
