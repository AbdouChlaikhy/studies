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
public class employe implements Iemploye
{
    float sal;
    
    public employe()
    {
        
    }
    public employe(float s)
    {
        sal=s;
    }
    
    
    public void saisie()
    {
        
        Scanner sc=new Scanner(System.in);
        
        System.out.println("Saisir le Salaire : ");
        
        try
        {
            sal=sc.nextFloat();
        }
        catch(Exception e)
        {
           System.out.println("err : taper un nbre reel"); 
        }
        
    }
    
    public void afficher()
    {
        System.out.println("Le Salaire est : "+sal);
    }
    
}
