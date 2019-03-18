package com.example.demo.controller;

import com.example.demo.config.JSONConvert;
import com.example.demo.model.Customer;
import com.example.demo.model.Merchant;
import com.example.demo.service.CustomerService;
import com.example.demo.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getAllCustomer() {
        List<Customer> customers = customerService.findAll();
        return JSONConvert.JSONConverter(customers);
    }

    @RequestMapping(value = "/{customerID}", method = RequestMethod.GET)
    public boolean checkIfExist(@PathVariable("customerID") String customerID) {
        Customer customer = customerService.findByCustomerID(customerID);
        return customer != null;
    }


    // TODO: HAVAN'T SOLVED MULTIPLE PATHVARIABLES
    @RequestMapping(value = "/{customerID}/password/{password}", method = RequestMethod.GET)
    public boolean checkPassword(@PathVariable("customerID") String customerID, @PathVariable("password") String password){
        return customerService.findByCustomerID(customerID).getPassword().equals(password);
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public String addCustomer(@RequestBody Customer customer){
        return JSONConvert.JSONConverter(customerService.save(customer));
    }

}
