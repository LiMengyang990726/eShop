package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MerchantProductService {
    private MerchantProductRepository merchantProductRepository;

    private List<MerchantProduct> merchantProducts = new ArrayList<>(Arrays.asList());

    public int[] getAllProduct(String merchantID){
        List<MerchantProduct> merchantProducts = new ArrayList<>();
        merchantProducts.add(merchantProducts.stream().filter(m -> m.getMerchantId().equals(merchantID)).findAny().get());
        int productId[] = new int[merchantProducts.size()];

        for (int i = 0; i < merchantProducts.size(); i++) {
            int product = merchantProducts.get(i).getProductID();
            productId[i] = product;
        };

        return productId;
    }

    public void addProductLinking(MerchantProduct merchantProduct){
        merchantProductRepository.save(merchantProduct);
    }

    public void deleteProductLinking(int productId){
        for (int i = 0; i < merchantProducts.size(); i++){
            int id = merchantProducts.get(i).getProductID();
            boolean b = (id == productId);
            if(b){
                merchantProducts.remove(merchantProducts.get(i));
            }
        }
    }
}
