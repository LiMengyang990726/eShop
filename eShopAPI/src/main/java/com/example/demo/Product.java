package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;

@Entity
public class Product {

    @Id
    private int productID;
    private float price;
    private String description;
    private Blob image;

    public Product(int productID, float price, String description, Blob image) {
        this.productID = productID;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    public Product() {
    }

    public int getProductID() {
        return productID;
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

    public Blob getImage() {
        return image;
    }

    public void setImage(Blob image) {
        this.image = image;
    }
}
