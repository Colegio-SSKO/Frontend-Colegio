package com.example.frontendcol;

import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;


@WebFilter(filterName = "FilteringRoutes" ,  urlPatterns = "/*")
public class FilteringRoutes implements Filter {
    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        Integer index = req.getRequestURI().indexOf("SPAroutes");

        if(req.getRequestURI().indexOf("SPAroutes")!=-1 || req.getRequestURI().indexOf("components2")!=-1
            || req.getRequestURI().indexOf("static")!=-1 || req.getRequestURI().indexOf("favicon")!=-1
        ){
            System.out.println(req.getRequestURI());
            chain.doFilter(request, response);
        }

        else{
            System.out.println("blocked: " + req.getRequestURI());
            res.sendRedirect("/SPAroutes/index.jsp");
        }


    }
}
