package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "Merchant")
public class Merchant {

    @Id
    @Column(name = "merchantID", unique = true)
    private String merchantID;

    @Column(name = "password")
    private String password;


    public Merchant() {

    }

    public Merchant(String merchantID, String password) {
        this.merchantID = merchantID;
        this.password = password;
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
