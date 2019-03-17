package com.example.demo.service.impl;

import com.example.demo.model.Customer;
import com.example.demo.repo.CustomerRepo;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepo customerRepo;

    @Autowired
    public CustomerServiceImpl(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    @Override
    public List<Customer> findAll(){return customerRepo.findAll(); }

    @Override
    public Customer findByCustomerID(String customerID){
        return customerRepo.findCustomerByCustomerID(customerID);
    }

    @Override
    public String findCustomerPassword(String customerID){
        return customerRepo.findPasswordByCustomerID(customerID);
    }

    @Override
    public Customer save(Customer customer){
        return customerRepo.save(customer);
    }

}
