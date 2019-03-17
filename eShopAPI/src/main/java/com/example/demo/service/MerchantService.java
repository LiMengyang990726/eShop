package com.example.demo.service;
import com.example.demo.model.Merchant;

import java.util.List;

public interface MerchantService {
    List<Merchant> findAll();

    Merchant findMerchantById(String merchantID);

    Merchant save(Merchant merchant);

    void delete(Merchant merchant);
}
