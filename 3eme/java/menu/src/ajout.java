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
import java.awt.event.*;

public class ajout extends JFrame implements ActionListener
{
    Container con=null;
    JLabel l1 = new JLabel("code");
    JTextField t1 = new JTextField(5);
    
    JLabel l2 = new JLabel("Nom");
    JTextField t2 = new JTextField(25);
    
    JButton b1 = new JButton("Valider");
        JButton b2 = new JButton("Retour");

    
    
    
    
    
    public ajout()
    {
        con=getContentPane();
        setTitle("A J O U T");
        
        con.setLayout(new FlowLayout());
        con.setBackground(Color.cyan);
       con.add(l1);
       con.add(t1);
       
       con.add(l2);
       con.add(t2);
       con.add(b1);
       con.add(b2);
        
     b1.addActionListener(this);
     b2.addActionListener(this);
        
        
        
    }
    
    
    
    
    
    public void actionPerformed(ActionEvent e)
    {
        if (e.getSource()== b2)
        {
            this.hide();
        new menu().setVisible(true);
        }
        else
        {
            //bd
            
            
            
        }
    }
    
    public static void main(String[] arg)
    {
        new ajout().setVisible(true);
    }
    
}
