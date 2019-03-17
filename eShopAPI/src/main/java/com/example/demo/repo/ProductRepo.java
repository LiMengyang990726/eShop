package com.example.demo.repo;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,String> {

    // find a product by id
    Product findByProductID(int productID);

    // find products by merchantid
    List<Product> findByMerchantID(String merchantID);

    // find products by catogory
    List<Product> findByCatogory(String catogory);

    // insert one product
    Product save(Product product);

    // delete one product
    void delete(Product product);
}
