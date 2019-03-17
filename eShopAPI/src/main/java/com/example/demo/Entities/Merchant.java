package com.example.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Merchant {
    @Id
    private String merchantID;
    private String password;

    public Merchant(String merchantID, String password) {
        this.merchantID = merchantID;
        this.password = password;

    }

    public Merchant() {
    }

    public String getMerchantID() {
        return merchantID;
    }

    public void setMerchantID(String merchantID) {
        this.merchantID = merchantID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
