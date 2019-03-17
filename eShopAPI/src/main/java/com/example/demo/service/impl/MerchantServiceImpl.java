package com.example.demo.service.impl;

import com.example.demo.model.Merchant;
import com.example.demo.repo.MerchantRepo;
import com.example.demo.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// jpa query by example
@Service
public class MerchantServiceImpl implements MerchantService {

    private MerchantRepo merchantRepo;

    @Autowired
    public MerchantServiceImpl(MerchantRepo merchantRepo) {
        this.merchantRepo = merchantRepo;
    }

    @Override
    public List<Merchant> findAll() {
        return merchantRepo.findAll();
    }

    @Override
    public Merchant findMerchantById(String merchantID) {
        return merchantRepo.findByMerchantID(merchantID);
    }

    @Override
    public Merchant save(Merchant merchant) {
        return merchantRepo.save(merchant);
    }

    @Override
    public void delete(Merchant merchant) {
        merchantRepo.delete(merchant);
    }
}
