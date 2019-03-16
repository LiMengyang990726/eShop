package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MerchantProduct {
    @Id
    private String merchantId;
    private int productId;

    public MerchantProduct(String merchantId, int productID) {
        this.merchantId = merchantId;
        this.productId = productID;
    }

    public MerchantProduct() {
    }

    public String getMerchantId() {
        return merchantId;
    }

    public void setMerchantId(String merchantId) {
        this.merchantId = merchantId;
    }

    public int getProductID() {
        return productId;
    }

    public void setProductID(int productID) {
        this.productId = productID;
    }
}
