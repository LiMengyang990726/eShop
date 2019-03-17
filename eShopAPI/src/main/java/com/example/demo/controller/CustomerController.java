package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Merchant;
import com.example.demo.service.CustomerService;
import com.example.demo.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Customer> getAllCustomer() {
        List<Customer> customers = customerService.findAll();
        return customers;
    }

    @RequestMapping(value = "/{customerID}", method = RequestMethod.GET)
    public boolean checkIfExist(@PathVariable("customerID") String customerID) {
        Customer customer = customerService.findByCustomerID(customerID);
        return customer != null;
    }


    // TODO: HAVAN'T SOLVED MULTIPLE PATHVARIABLES
    @RequestMapping(value = "/customer/{customerID}/password/{password}", method = RequestMethod.GET)
    public boolean checkPassword(@PathVariable("customerID") String customerID, @PathVariable("password") String password){
        return customerService.findByCustomerID(customerID).getPassword().equals(password);
    }

    @RequestMapping(value = "/post/{customer}", method = RequestMethod.POST)
    public Customer addCustomer(@PathVariable("customer") Customer customer){
        return customerService.save(customer);
    }

}
