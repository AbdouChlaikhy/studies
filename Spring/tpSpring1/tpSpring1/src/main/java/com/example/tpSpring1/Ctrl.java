package com.example.tpSpring1;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Ctrl {

    @GetMapping("/Client")
    public List<Client> TT() {

        List<Client> ppl = new ArrayList<>();

        ppl.add(new Client("abdou", "preAbd"));
        ppl.add(new Client("mouad", "mouadPrn"));

        return ppl;
    }
}