package com.example.tpService2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Etudiant {
    @GetMapping("/Etudiant")
    public String mes()
    {
        return "MOUAD";
    }
}
