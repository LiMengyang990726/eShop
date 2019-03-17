package com.example.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;

@Entity
public class Product {

    @Id
    private int productID;
    private float price;
    private String description;
    private String image;
    private String catogory;


    public Product(int productID, float price, String description, String image, String catogory) {
        this.productID = productID;
        this.price = price;
        this.description = description;
        this.image = image;
        this.catogory = catogory;
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
