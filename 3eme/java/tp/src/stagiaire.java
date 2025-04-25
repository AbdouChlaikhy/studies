
import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author pc
 */
public class stagiaire implements Ietudiant,Iemploye{
    
    float pfe;
    
    public stagiaire()
    {
        
    }
    public stagiaire(float p)
    {
        pfe=p;
    }
    
    Ietudiant e = new etudiant();
    Iemploye emp = new employe();
    
    public void saisie()
    {
        e.saisie();
        emp.saisie();
        
        Scanner sc=new Scanner(System.in);
        
        System.out.println("Saisir la note pfe : ");
        
        try
        {
            pfe=sc.nextFloat();
        }
        catch(Exception e)
        {
           System.out.println("err : taper un nbre reel"); 
        }
    }
    public void afficher()
    {
        
        e.afficher();
        emp.afficher();
        System.out.println("la note pfe est : "+pfe);
        
    }
}


