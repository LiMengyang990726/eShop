package com.example.demo.controller;
import com.example.demo.config.JSONConvert;
import com.example.demo.model.Merchant;
import com.example.demo.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/merchant")
public class MerchantController {

    @Autowired
    private MerchantService merchantService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Merchant> getAllMerchant() {
        List<Merchant> merchants = merchantService.findAll();
        return merchants;
    }

    @RequestMapping(value = "/{merchantID}", method = RequestMethod.GET)
    public boolean checkIfExist(@PathVariable("merchantID") String merchantID) {
        Merchant merchant = merchantService.findMerchantById(merchantID);
        return merchant != null;
    }

    // TODO: HAVAN'T SOLVED MULTIPLE PATHVARIABLES
    @RequestMapping(value = "/merchant/{merchantID}/password/{password}", method = RequestMethod.GET)
    public boolean checkPassword(@PathVariable("merchantID") String merchantID, @PathVariable("password") String password){
        return merchantService.findMerchantById(merchantID).getPassword().equals(password);
    }

    // TODO: How to pass in a class like merchant through url?
    @RequestMapping(value = "/post/{merchant}", method = RequestMethod.POST)
    public Merchant addMerchant(@PathVariable("merchant") Merchant merchant){
        return merchantService.save(merchant);
    }
}
