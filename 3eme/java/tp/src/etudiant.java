/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author pc
 */
import java.util.Scanner;
public class etudiant implements Ietudiant
{
    float mg;
    
    public etudiant()
    {
        
    }
    public etudiant(float m)
    {
        mg=m;
    }
    
    
    public void saisie()
    {
        
        Scanner sc=new Scanner(System.in);
        
        System.out.println("Saisir la M.generale : ");
        
        try
        {
            mg=sc.nextFloat();
        }
        catch(Exception e)
        {
           System.out.println("err : taper un nbre reel"); 
        }
        
    }
    
    public void afficher()
    {
        System.out.println("La M.generale est : "+mg);
    }
    
}
