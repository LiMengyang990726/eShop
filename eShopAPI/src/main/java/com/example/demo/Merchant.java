package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Merchant {
    @Id
    private String merchantId;
    private String password;

    public Merchant(String merchantId, String password) {
        this.merchantId = merchantId;
        this.password = password;
    }

    public Merchant() {
    }

    public String getMerchantId() {
        return merchantId;
    }

    public void setMerchantId(String merchantId) {
        this.merchantId = merchantId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
