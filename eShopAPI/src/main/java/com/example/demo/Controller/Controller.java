package com.example.demo.Controller;

import com.example.demo.Entities.Merchant;
import com.example.demo.Entities.Product;
import com.example.demo.Services.MerchantService;
import com.example.demo.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Blob;
import java.util.List;

@RestController
public class Controller {

    @Autowired
    private MerchantService merchantService;

    @Autowired
    private ProductService productService;

    @RequestMapping(method = RequestMethod.POST, value="/addMerchant/")
    public void addMerchant(@RequestBody String merchantID, String merchantPassword){
        Merchant merchant = new Merchant();
        merchant.setMerchantID(merchantID);
        merchant.setPassword(merchantPassword);
        merchantService.addMerchant(merchant);
    }

    @RequestMapping(method = RequestMethod.POST, value="/addProduct/")
    public void addProduct(@Valid @RequestBody Product product) {
        productService.addNewProduct(product.getProductID(),product.getPrice(),product.getDescription(),product.getImage(),product.getCatogory());
    }

    @RequestMapping("/getMerchants/")
    public List<Merchant> getMerchant(){
        return merchantService.getAllMerchant();
    }

    @GetMapping("/getAll/")
    public List<Product> getProduct(){
        return productService.getAll();
    }

    @RequestMapping("/getAllProducts/{merchantID}")
    public List<Product> getAllProductsOfMerchant(@PathVariable String merchantID){
        return productService.getAllProducts(merchantID);
    }
//
//    @RequestMapping("/login/{id}")
//    public Topic getTopic(@PathVariable String id){
//        return topicService.getTopic(id);
//    }
//
//    @RequestMapping(method = RequestMethod.POST, value = "/login")
//    public void addTopic(@RequestBody Topic topic){
//        topicService.addTopic(topic);
//    }
//
//    // PUT is just update
//    @RequestMapping(method = RequestMethod.PUT, value = "/login/{id}")
//    public void updateTopic(@RequestBody Topic topic, String id){
//        topicService.updateTopic(topic, id);
//    }
//
//    @RequestMapping(method = RequestMethod.DELETE, value = "/login/{id}")
//    public void addTopic(@RequestBody String id){
//        topicService.deleteTopic(id);
//    }
}
