package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface MerchantProductRepository extends CrudRepository<MerchantProduct, Id> {
}
