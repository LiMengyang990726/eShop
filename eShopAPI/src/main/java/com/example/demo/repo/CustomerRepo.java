package com.example.demo.repo;

import com.example.demo.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    List<Customer> findAll();

    Customer findCustomerByCustomerID(String customerID);

    String findPasswordByCustomerID(String customerID);

    Customer save(Customer customer);
}
