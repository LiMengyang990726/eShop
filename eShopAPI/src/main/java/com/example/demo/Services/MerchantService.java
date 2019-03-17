package com.example.demo.Services;

import com.example.demo.Entities.Merchant;
import com.example.demo.Repos.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MerchantService {
    @Autowired
    private MerchantRepository merchantRepository;
    private MerchantService merchantService;
    private List<Merchant> merchants = new ArrayList<>(Arrays.asList());


    public List<Merchant> getAllMerchant(){
        List<Merchant> merchants = new ArrayList<>();
        merchantRepository.findAll().forEach(merchants::add);
        return merchants;
    }

    // Get the merchant by id
    public Merchant getMerchant(String merchantID){
        return merchants.stream().filter(m -> m.getMerchantID().equals(merchantID)).findFirst().get();
    }

    // While logging in, check the password if correct or not
    public String getPassword(String ID){
        // Get the current merchant's password
        Merchant merchant = getMerchant(ID);
        String password = merchant.getPassword();
        return password;
    }

    // While adding in a new merchant
    public void addMerchant(Merchant merchant){
        String[] merchantID = merchantService.getAllMerchantID();
        boolean flag = true;
        for(int i = 0 ; i < merchantID.length; i++){
            if(merchantID[i].equals(merchant.getMerchantID())){
                flag = false;
            }
        }
        if(flag) {
            merchantRepository.save(merchant);
        }
    }

    // Sopport previous add
    public String[] getAllMerchantID(){
        String[] merchantID = new String[merchants.size()];
        for(int i = 0; i < merchants.size();i++){
            merchantID[i] = merchants.get(i).getMerchantID();
        }
        return merchantID;
    }

    public void deleteMerchant(String merchantID){
        merchants.removeIf(m -> m.getMerchantID().equals(merchantID));
    }
}
