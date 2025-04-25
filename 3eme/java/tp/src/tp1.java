/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author pc
 */
import javax.swing.*;
import java.awt.*;

public class tp1 extends JFrame
{
    
    Container con=null;
    JLabel l1 = new JLabel("nom");
    JTextField t1 = new JTextField(30);
    JLabel l2= new JLabel("Prenom");
    JTextField t2 = new JTextField(30);
    JButton b1 = new JButton("envoyer");
    
    public tp1()
    {
        setTitle("papa jet maman par la fenetre");
        con=getContentPane();
        con.setLayout(new FlowLayout());
        setSize(new Dimension(1200,1100));
        con.setBackground(Color.cyan);
        con.add(l1);
        con.add(t1);
         con.add(l2);
        con.add(t2);
         con.add(b1);
        
        
    }
    
    public static void main(String[] arg)
    {
        new tp1().setVisible(true);
    }
    
    
}
