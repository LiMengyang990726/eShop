package com.example.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProductCatagory {

    @Id
    private String catogory;
    private int productID;

    public ProductCatagory(String catogory, int productID) {
        this.catogory = catogory;
        this.productID = productID;
    }

    public ProductCatagory() {
    }

    public String getCatogory() {
        return catogory;
    }

    public void setCatogory(String catogory) {
        this.catogory = catogory;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }
}
