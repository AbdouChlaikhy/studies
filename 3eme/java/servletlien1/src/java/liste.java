

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;

/**
 *
 * @author pc
 */
@WebServlet(urlPatterns = {"/liste"})
public class liste extends HttpServlet {
 public static int mate;
   
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            //les etapes de connexion
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>liste employes</title>");            
            out.println("</head>");
            out.println("<body>");
             out.println("<center>");
            
            out.println("<h1>Liste employés</h1>");
            out.println("<form action='serv1' method='post'>");
             out.println("<table border='2'>");
              out.println("<tr>");
               out.println("<td>");
                out.println("Matricule");
                out.println("</td>");
                out.println("<td>");
                out.println("Nom");
                out.println("</td>");
                out.println("<td>");
                out.println("Salaire");
                out.println("</td>");
                out.println("<td>");
                out.println("prime");
                out.println("</td>");
                
                out.println("<td>");
                out.println("Action 1");
                out.println("</td>");
                out.println("<td>");
                out.println("Action 2");
                out.println("</td>");
               out.println("</tr>");
             
            try
            {
                Class.forName("oracle.jdbc.driver.OracleDriver");
                Connection co=null;
                co=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","marah");
                Statement s1=co.createStatement();
                String req="select * from personne";
                ResultSet res=s1.executeQuery(req);
                
                while(res.next())
                {
                    mate=res.getInt("mat");
                    
                    out.println("<tr>");
               out.println("<td>");
                out.println(""+res.getInt("mat"));
                out.println("</td>");
                out.println("<td>");
                out.println(""+res.getString("nom"));
                out.println("</td>");
                out.println("<td>");
                out.println(""+res.getFloat("sal"));
                out.println("</td>");
                out.println("<td>");
                out.println(""+res.getFloat("pr"));
                out.println("</td>");
                
                out.println("<td><a href='modif?mat="+mate+"'>Modification</a></td>");
                out.println("<td><a href='supp?mat="+mate+"'>Suppression</a></td>");
                
                
               out.println("</tr>");
                    
                    
                    
                }
                out.println("</table><br><br>");
                
                out.println("<input type='submit' value='New'>");
                out.println("</form>");
            out.println("</center>");
                out.println("</body>");
            out.println("</html>");
            }
            catch(ClassNotFoundException ee)
            {
                out.println("err pilote");
            }
            catch(SQLException gg)
            {
                out.println("err de requete");
            }
            
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
