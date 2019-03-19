package com.example.demo.controller;
import com.example.demo.config.JSONConvert;
import com.example.demo.model.Merchant;
import com.example.demo.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/merchant")
public class MerchantController {

    @Autowired
    private MerchantService merchantService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getAllMerchant() {
        List<Merchant> merchants = merchantService.findAll();
        return JSONConvert.JSONConverter(merchants);
    }

    @RequestMapping(value = "/{merchantID}", method = RequestMethod.GET)
    public boolean checkIfExist(@PathVariable("merchantID") String merchantID) {
        Merchant merchant = merchantService.findMerchantById(merchantID);
        return merchant != null;
    }

    @RequestMapping(value = "/{merchantID}/password/{password}", method = RequestMethod.GET)
    public boolean checkPassword(@PathVariable("merchantID") String merchantID, @PathVariable("password") String password){
        Merchant merchant = merchantService.findMerchantById(merchantID);
        return merchant.getPassword().equals(password);
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public String addMerchant(@RequestBody Merchant merchant){
        return JSONConvert.JSONConverter(merchantService.save(merchant));
    }
}
