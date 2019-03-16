package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {

    @Id
    private String customerID;
    private String password;
    private String bank_account;

    public Customer(String customerID, String password, String bank_account) {
        this.customerID = customerID;
        this.password = password;
        this.bank_account = bank_account;
    }

    public Customer() {
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBank_account() {
        return bank_account;
    }

    public void setBank_account(String bank_account) {
        this.bank_account = bank_account;
    }
}
