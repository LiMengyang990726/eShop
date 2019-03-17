package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @Column(name = "productID", unique = true)
    private int productID;

    @Column(name = "merchantID")
    private String merchantID;

    @Column(name = "price")
    private float price;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @Column(name = "catogory")
    private String catogory;

    public Product(int productID, String merchantID, float price, String description, String image, String catogory) {
        this.productID = productID;
        this.merchantID = merchantID;
        this.price = price;
        this.description = description;
        this.image = image;
        this.catogory = catogory;
    }

    public Product(){

    }

    public int getProductID() {
        return productID;
    }

    public String getMerchantID() {
        return merchantID;
    }

    public void setMerchantID(String merchantID) {
        this.merchantID = merchantID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCatogory() {
        return catogory;
    }

    public void setCatogory(String catogory) {
        this.catogory = catogory;
    }
}