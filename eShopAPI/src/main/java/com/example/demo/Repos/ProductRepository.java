package com.example.demo.Repos;

import com.example.demo.Entities.MerchantProduct;
import com.example.demo.Entities.Product;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface ProductRepository extends CrudRepository<Product, Id> {
}
