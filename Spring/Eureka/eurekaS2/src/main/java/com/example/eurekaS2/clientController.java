package com.example.eurekaS2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class clientController {
    @GetMapping("client")
    public  String message(){return "je suis s2";}
}
