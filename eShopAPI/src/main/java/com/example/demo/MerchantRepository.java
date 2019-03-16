package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface MerchantRepository extends CrudRepository<Merchant, Id> {

}
