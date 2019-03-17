package com.example.demo.Services;

import com.example.demo.Entities.Merchant;
import com.example.demo.Entities.MerchantProduct;
import com.example.demo.Entities.Product;
import com.example.demo.Repos.MerchantProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MerchantProductService {
    @Autowired
    private MerchantProductRepository merchantProductRepository;

    private List<MerchantProduct> merchantProducts = new ArrayList<>(Arrays.asList());

    // In merchant page, get all productID of a merchant
    public int[] getAllProductID(String merchantID){
        List<MerchantProduct> merchantProducts = new ArrayList<>();
        merchantProducts.add(merchantProducts.stream().filter(m -> m.getMerchantID().equals(merchantID)).findAny().get());
        int productID[] = new int[merchantProducts.size()];

        for (int i = 0; i < merchantProducts.size(); i++) {
            int product = merchantProducts.get(i).getProductID();
            productID[i] = product;
        }

        return productID;
    }

    // Add a new linking (done automatically)
    public void addProductLinking(Merchant merchant, Product product){
        MerchantProduct merchantProduct = new MerchantProduct();
        merchantProduct.setProductID(product.getProductID());
        merchantProduct.setMerchantID(merchant.getMerchantID());
        merchantProductRepository.save(merchantProduct);
    }

    public void deleteProductLinking(int productID){
        for (int i = 0; i < merchantProducts.size(); i++){
            int ID = merchantProducts.get(i).getProductID();
            boolean b = (ID == productID);
            if(b){
                merchantProducts.remove(merchantProducts.get(i));
            }
        }
    }
}
