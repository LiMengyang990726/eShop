package com.example.demo.service;

import com.example.demo.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();

    Product findProductById(int productID);

    List<Product> findProductByCatogory(String catogory);

    List<Product> findProductByMerchantID(String merchantID);

    Product save(Product product);

    void deleteProductById(int productID);
}
