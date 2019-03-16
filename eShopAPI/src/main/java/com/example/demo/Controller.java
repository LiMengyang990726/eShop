package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private MerchantService merchantService;

    @RequestMapping("/login")
    public List<Merchant> Login(){
        return merchantService.getAllMerchant();
    }
//
//    @RequestMapping("/login/{id}")
//    public Topic getTopic(@PathVariable String id){
//        return topicService.getTopic(id);
//    }
//
//    @RequestMapping(method = RequestMethod.POST, value = "/login")
//    public void addTopic(@RequestBody Topic topic){
//        topicService.addTopic(topic);
//    }
//
//    // PUT is just update
//    @RequestMapping(method = RequestMethod.PUT, value = "/login/{id}")
//    public void updateTopic(@RequestBody Topic topic, String id){
//        topicService.updateTopic(topic, id);
//    }
//
//    @RequestMapping(method = RequestMethod.DELETE, value = "/login/{id}")
//    public void addTopic(@RequestBody String id){
//        topicService.deleteTopic(id);
//    }
}
