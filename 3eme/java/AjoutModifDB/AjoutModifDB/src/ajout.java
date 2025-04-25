import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class ajout extends JFrame implements ActionListener{
 
    Container con=null;
    JLabel l1 = new JLabel ("Matricule");
    JTextField t1 = new JTextField(5);
    
    JLabel l2 = new JLabel ("Nom");
    JTextField t2 = new JTextField(25);
    
    JLabel l3 = new JLabel ("M.generale");
    JTextField t3 = new JTextField(12);
    
    JButton b1 = new JButton("Insertion");
    JButton b2 = new JButton("Quitter");
    
    public ajout()
    {
        con=getContentPane();
        con.setLayout(new FlowLayout());
        setSize(new Dimension(1200,1000));
        con.add(l1);
        con.add(t1);
        con.add(l2);
        con.add(t2);
        con.add(l3);
        con.add(t3);
        con.add(b1);
        con.add(b2);
        
        b1.addActionListener(this);
        b2.addActionListener(this);
        
        
    }
    
    
    public void actionPerformed(ActionEvent toto)
    {
        if (toto.getSource()==b2)
        {
            JOptionPane.showMessageDialog(null,"bye have a good day see you next season ???");
        
            System.exit(0);
        }
        else
        {
            //les etapes de connexion
            
            try
            {
                //chargement pilote
                Class.forName("oracle.jdbc.driver.OracleDriver");
                //URl le chemin
                Connection co=null;
                co=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","marah");
                //creation espace memoire pour execution de la requete
                
                Statement s1 = co.createStatement();
                Statement s2 = co.createStatement();
                
               //declaration de la requete
                String req="insert into etudiant values("+t1.getText()+",'"+t2.getText()+"',"+t3.getText()+")";
                //execution de la requete
                String req2="select * from etudiant where mat="+t1.getText();
                ResultSet r = s2.executeQuery(req2);
                int existe=0;
                while(r.next())
                {
                    existe=1;
                }
                if (existe==1)
                {
                     JOptionPane.showMessageDialog(null,"Matricule existe deja ???");
                }
                else
                {
                
                int res=s1.executeUpdate(req);
                 JOptionPane.showMessageDialog(null,"insertion okkkkkkkkkkkkkk");
                 t1.setText("");
                 t2.setText("");
                 t3.setText("");
                }
            }
            
            catch(ClassNotFoundException e1)
            {
                 JOptionPane.showMessageDialog(null,"err de pilote");
            }
            catch(SQLException e2)
            {
                 JOptionPane.showMessageDialog(null,"err de connexion ou err de requete");
            }
        }
    }
    
    public static void main(String[] arg)
    {
        new ajout().setVisible(true);
    }
}
