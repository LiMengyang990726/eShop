package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {

    @Id
    @Column(name = "customerID", unique = true)
    private String customerID;

    @Column(name = "password")
    private String password;

    @Column(name = "bank_account")
    private String bank_account;

    @Column(name = "CVV")
    private String CVV;

    public Customer(String customerID, String password, String bank_account, String CVV) {
        this.customerID = customerID;
        this.password = password;
        this.bank_account = bank_account;
        this.CVV = CVV;
    }

    public Customer(){

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

    public String getCVV() {
        return CVV;
    }

    public void setCVV(String CVV) {
        this.CVV = CVV;
    }
}
