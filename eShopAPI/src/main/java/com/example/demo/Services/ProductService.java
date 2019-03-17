package com.example.demo.Services;

import com.example.demo.Entities.Merchant;
import com.example.demo.Entities.MerchantProduct;
import com.example.demo.Entities.Product;
import com.example.demo.Repos.MerchantRepository;
import com.example.demo.Repos.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

//    private MerchantProductService merchantProductService;

    private List<Product> products = new ArrayList<>(Arrays.asList());

    // In merchant page, add new product
    public void addNewProduct(int productID,float price, String description, String image, String catogory){
        Product product = new Product(productID, price, description,image,catogory);
        products.add(product);
    }

    // In merchant page, get all products
    public List<Product> getAllProducts(String MerchantID){
        MerchantProductService merchantProductService = new MerchantProductService();
        int[] productID = merchantProductService.getAllProductID(MerchantID);
        List<Product> productsLocal = new ArrayList<>(Arrays.asList());
        for(int i = 0; i < productID.length; i++){
            productsLocal.add(products.get(productID[i]));
        }
        return productsLocal;
    }

    // Testing stage
    public List<Product> getAll(){
        List<Product> products = new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

}
