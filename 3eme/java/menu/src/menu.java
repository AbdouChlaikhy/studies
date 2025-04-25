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

public class menu extends JFrame implements ActionListener
{
    Container con=null;
    JMenuBar men=new JMenuBar();
    JMenu m1 = new JMenu("client");
    JMenuItem a = new JMenuItem("Ajout");
    JMenuItem m = new JMenuItem("Modification");
    JMenuItem s = new JMenuItem("Suppression");
    
    JMenu m2 = new JMenu("Suivi");
    JMenuItem c = new JMenuItem("Commande");
    JMenuItem f = new JMenuItem("Facture");
    
    JMenu m3 = new JMenu("Exit");	 
    JMenuItem q = new JMenuItem("Fin Programme");

    
    
    
    public menu()
    {
        con=getContentPane();
        
        con.setLayout(new FlowLayout());
        con.setBackground(Color.pink);
        setJMenuBar(men);
        men.add(m1);
        m1.add(a);
        m1.add(m);
        m1.add(s);
        
        men.add(m2);
        m2.add(c);
        m2.add(f);

        men.add(m3);
        m3.add(q);
        
     q.addActionListener(this);
     a.addActionListener(this);
        
     m.addActionListener(this);
        
        
    }
    
    
    
    
    
    public void actionPerformed(ActionEvent e)
    {
        if (e.getSource()== q)
        {
        JOptionPane.showMessageDialog(null,"bye bye have a good night see you next week");
        System.exit(0);
        }
        else if (e.getSource()== a)
        {
            //ajout
          
            
            new ajout().setVisible(true);
            
        }
        else
        {
            this.hide();
            new moidf().setVisible(true);
        }
    }
    
    public static void main(String[] arg)
    {
        new menu().setVisible(true);
    }
    
}
