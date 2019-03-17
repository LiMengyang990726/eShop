package com.example.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MerchantProduct {
    @Id
    private String merchantID;
    private int productID;

    public MerchantProduct(String merchantID, int productID) {
        this.merchantID = merchantID;
        this.productID = productID;
    }

    public MerchantProduct() {
    }

    public String getMerchantID() {
        return merchantID;
    }

    public void setMerchantID(String merchantID) {
        this.merchantID = merchantID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }
}
