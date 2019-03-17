package com.example.demo.Repos;

import com.example.demo.Entities.Merchant;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface MerchantRepository extends CrudRepository<Merchant, Id> {

}
