package com.example.demo.controller;

import com.example.demo.config.JSONConvert;
import com.example.demo.model.Cart;
import com.example.demo.model.Customer;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getAllCarts() {
        List<Cart> carts= cartService.findAll();
        return JSONConvert.JSONConverter(carts);
    }

    @RequestMapping(value = "/customer/{customerID}", method = RequestMethod.GET)
    public String getCartsByCustomerID(@PathVariable("customerID") String customerID){
        return JSONConvert.JSONConverter(cartService.getAllCartsByCustomerID(customerID));
    }

    @RequestMapping(value = "/product/{productID}", method = RequestMethod.GET)
    public String getCartsByProductID(@PathVariable("productID") int productID){
        return JSONConvert.JSONConverter(cartService.getAllCartsByProductID(productID));
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public String addCart(@RequestBody Cart cart){
        return JSONConvert.JSONConverter(cartService.save(cart));
    }
}
