package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MerchantService {
    private MerchantRepository merchantRepository;

    private List<Merchant> merchants = new ArrayList<>(Arrays.asList());

    public List<Merchant> getAllMerchant(){
        List<Merchant> merchants = new ArrayList<>();
        merchantRepository.findAll().forEach(merchants::add);
        return merchants;
    }

    // Get the merchant by id
    public Merchant getMerchant(String merchantId){
        return merchants.stream().filter(m -> m.getMerchantId().equals(merchantId)).findFirst().get();
    }

    // While logging in, check the password if correct or not
    public String getPassword(String id){
        // Get the current merchant's password
        Merchant merchant = getMerchant(id);
        String password = merchant.getPassword();
        return password;
    }

    public void addMerchant(Merchant merchant){
        merchantRepository.save(merchant);
    }

    public void deleteMerchant(String merchantId){
        merchants.removeIf(m -> m.getMerchantId().equals(merchantId));
    }
}
