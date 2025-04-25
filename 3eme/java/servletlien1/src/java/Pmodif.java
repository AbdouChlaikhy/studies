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
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;

/**
 *
 * @author pc
 */
@WebServlet(urlPatterns = {"/Pmodif"})
public class Pmodif extends HttpServlet {

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
            /* TODO output your page here. You may use following sample code. */
            String nom=request.getParameter("nom");
            float sal = Float.valueOf(request.getParameter("sal"));
            float pr=Float.valueOf(request.getParameter("pr"));
            
            
            
            try
            {
                //chargement pilote
                Class.forName("oracle.jdbc.driver.OracleDriver");
                //url
                Connection con=null;
                con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","marah");
                //creation espace memoire
                Statement s1=con.createStatement();
                //declaration requete
                String req="update personne set nom='"+nom+"',sal="+sal+",pr="+pr+" where mat="+modif.mate;
                
                int res= s1.executeUpdate(req);
                ServletContext ct = request.getServletContext();
                RequestDispatcher dis=ct.getRequestDispatcher("/liste");
                dis.forward(request, response);
                
            }
            catch(ClassNotFoundException ee)
            {
                out.println("err pilote ????");
            }
            catch(SQLException gg)
            {
                out.println("err requete ou connexion ???");
            }
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Pmodif</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Pmodif at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
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
