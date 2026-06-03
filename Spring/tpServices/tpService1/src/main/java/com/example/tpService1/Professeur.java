package com.example.tpService1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Professeur {
    @GetMapping("/Professeur")
    public String pr()
    {
        return "MARAH";
    }
}
