package com.example.demo.repo;

import com.example.demo.model.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MerchantRepo extends JpaRepository<Merchant,String> {

    // find a merchant by id
    Merchant findByMerchantID(String merchantID);

    // insert one merchant
    Merchant save(Merchant merchant);

    // delete one merchant
    void delete(Merchant merchant);
}
