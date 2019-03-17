package com.example.demo.service;


import com.example.demo.model.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAll();

    Customer findByCustomerID(String customerID);

    String findCustomerPassword(String customerID);

    Customer save(Customer customer);
}
