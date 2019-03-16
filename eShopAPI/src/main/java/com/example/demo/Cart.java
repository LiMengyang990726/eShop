package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cart {

    @Id
    private String customerID;
    private int productID;
    private int qtyl;

    public Cart(String customerID, int productID, int qtyl) {
        this.customerID = customerID;
        this.productID = productID;
        this.qtyl = qtyl;
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

    public int getQtyl() {
        return qtyl;
    }

    public void setQtyl(int qtyl) {
        this.qtyl = qtyl;
    }
}
