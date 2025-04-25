/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
@WebServlet(urlPatterns = {"/supp"})
public class supp extends HttpServlet {

    public static int mate;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            
            
            
            
            
            int mat=Integer.parseInt(request.getParameter("mat"));
            
            try
            {
                Class.forName("oracle.jdbc.driver.OracleDriver");
                Connection co=null;
                co=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","marah");
                Statement s1=co.createStatement();
                String req="select * from personne where mat="+mat;
                ResultSet res=s1.executeQuery(req);
                
                while(res.next())
                {
            mate=mat;
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet supp</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<form action ='Psupp' method='post'>");
            out.println("<center>");
            out.println("Nom");
           out.println(""+res.getString("nom")+"");
           out.println("<br><br>");
           
           out.println("Salaire");
           
           out.println(""+res.getFloat("sal")+"");
           out.println("<br><br>");
           
           out.println("Prime");
           out.println(""+res.getFloat("pr")+"");
           out.println("<br><br>");
           
          
           out.println("<input type='submit' value='Delete'>"); 
            out.println("</center>");
            out.println("</form>");
            out.println("</body>");
            out.println("</html>");
                }
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
