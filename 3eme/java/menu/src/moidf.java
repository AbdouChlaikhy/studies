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

public class moidf extends JFrame implements ActionListener
{
    Container con=null;
    JLabel l1 = new JLabel("code");
    JTextField t1 = new JTextField(5);
    
    JLabel l2 = new JLabel("Nom");
    JTextField t2 = new JTextField(25);
    JLabel l3 = new JLabel("Nationalite");
    
    JButton b1 = new JButton("Valider");
        JButton b2 = new JButton("Retour");
JComboBox com= new JComboBox();
    
    
    
    
    
    public moidf()
    {
        con=getContentPane();
        setTitle("M O D I F I C A T I O N");
        
        con.setLayout(new FlowLayout());
        con.setBackground(Color.cyan);
       con.add(l1);
       con.add(t1);
       
       con.add(l2);
       con.add(t2);
       con.add(l3);
       con.add(b1);
       con.add(b2);
       com.addItem("France");
       com.addItem("USA");
       com.addItem("Maroc");
       
       con.add(com);
        
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
        new moidf().setVisible(true);
    }
    
}
