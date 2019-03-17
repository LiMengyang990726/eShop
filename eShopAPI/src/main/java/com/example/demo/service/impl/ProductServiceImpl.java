package com.example.demo.service.impl;

import com.example.demo.model.Product;
import com.example.demo.repo.ProductRepo;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepo productRepo;

    @Autowired
    public ProductServiceImpl(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @Override
    public List<Product> findAll() {
        return productRepo.findAll();
    }

    @Override
    public Product findProductById(int productID) {
        return productRepo.findByProductID(productID);
    }

    @Override
    public List<Product> findProductByMerchantID(String merchantID){
        List<Product> results = new ArrayList<>();
        List<Product> all = productRepo.findAll();
        for(int i = 0; i < all.size(); i++){
            if(all.get(i).getMerchantID().equals(merchantID)){
                results.add(all.get(i));
            }
        }
        return results;
    }

    @Override
    public List<Product> findProductByCatogory(String catogory){
        List<Product> results = new ArrayList<>();
        List<Product> all = productRepo.findAll();
        for(int i = 0; i < all.size(); i++){
            if(all.get(i).getCatogory().equals(catogory)){
                results.add(all.get(i));
            }
        }
        return results;
    }

    @Override
    public Product save(Product product) {
        return productRepo.save(product);
    }

    @Override
    public void deleteProductById(int productID) {
        productRepo.delete(productRepo.findByProductID(productID));
    }
}
