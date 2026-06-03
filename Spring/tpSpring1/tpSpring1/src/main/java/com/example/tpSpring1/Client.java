package com.example.tpSpring1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


public class Client {


       private String nom ;
       private String prenom;

       public Client( String nom, String prenom) {
           this.nom=nom;
           this.prenom=prenom;

       }
    public String getNom() {
        return nom;
    }

    // Setter for nom
    public void setNom(String nom) {
        this.nom = nom;
    }

    // Getter for prenom
    public String getPrenom() {
        return prenom;
    }

    // Setter for prenom
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

   }


