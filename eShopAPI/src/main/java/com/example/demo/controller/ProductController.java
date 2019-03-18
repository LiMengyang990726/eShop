package com.example.demo.controller;

import com.example.demo.config.JSONConvert;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getAllProduct() {
        List<Product> products = productService.findAll();
        return JSONConvert.JSONConverter(products);
    }

    @RequestMapping(value = "/catogory/{catogory}", method = RequestMethod.GET)
    public String getAllProductByCatogory(@PathVariable("catogory") String catogory) {
        return JSONConvert.JSONConverter(productService.findProductByCatogory(catogory));
    }

    @RequestMapping(value = "/product/{productID}", method = RequestMethod.GET)
    public String getProductByID(@PathVariable("productID") int productID){
        return JSONConvert.JSONConverter(productService.findProductById(productID));
    }

    @RequestMapping(value = "/merchant/{merchantID}", method = RequestMethod.GET)
    public String getProductByMerchantID(@PathVariable("merchantID") String merchantID){
        return JSONConvert.JSONConverter(productService.findProductByMerchantID(merchantID));
    }
}
