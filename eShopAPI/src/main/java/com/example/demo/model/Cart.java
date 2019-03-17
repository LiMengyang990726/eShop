package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Cart")
public class Cart {

    @Id
    @Column(name = "customerID")
    private String customerID;

    @Column(name = "productID")
    private int productID;

    @Column(name = "qty")
    private int qty;

    public Cart(String customerID, int productID, int qty) {
        this.customerID = customerID;
        this.productID = productID;
        this.qty = qty;
    }

    public Cart(){

    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
