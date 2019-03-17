package com.example.demo.Repos;

import com.example.demo.Entities.MerchantProduct;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface MerchantProductRepository extends CrudRepository<MerchantProduct, Id> {
}
