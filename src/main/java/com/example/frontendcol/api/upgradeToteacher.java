package com.example.frontendcol.api;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;
import java.util.Collection;
import java.util.Random;

@WebServlet(name = "upgradeToteacher", value = "/api/upgradeToteacher")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 20, // 20MB
        maxFileSize = 1024 * 1024 * 100000, // 100000MB
        maxRequestSize = 1024 * 1024 * 5000000 // 5000000MB
)

public class upgradeToteacher extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("post ek weda");

        //generating a random number to add to the file name
        Integer min = 1;
        Integer max = 10000000;

        Random random = new Random();
        Integer randomNumber  = random.nextInt((max-min) + 1) + min;

        Collection<Part> files = request.getParts();

        String contentType = "";
        String thumbnailPath = "";

        try {
            for (Part file : files) {
                contentType = file.getContentType();

                //handle thumbnail
                System.out.println(contentType);

                if (contentType.startsWith("image/")){
                    thumbnailPath = handleThumbnail(file, request, randomNumber);
                    System.out.println("mekata awa");
                }
            }
        } catch (Exception exception) {
            System.out.println(exception);
        }

        // return thumbnail path
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(thumbnailPath);
    }

    public static String handleThumbnail(Part thumbnail, HttpServletRequest request, Integer randomNumber) throws IOException {
        //user id ek session eken gnna dnt hardcode krnw
        Integer userID = 1123;
        String thumbnailFilename = "tbn" + userID + randomNumber +thumbnail.getSubmittedFileName();
        thumbnailFilename = thumbnailFilename.replace(" ", "");

        ServletContext context = request.getServletContext();
        String relativePath = "";
        String thumbnailPath = context.getRealPath(relativePath);

        String saveFilePath = "/"+thumbnailFilename;
        File savedThumbnailFile = new File(thumbnailPath, saveFilePath);
        InputStream thumbnailInputStream = thumbnail.getInputStream();
        OutputStream thumbnailOutputStream = new FileOutputStream(savedThumbnailFile);
        byte[] thumbnailBuffer = new byte[1024];
        int thumbnailBytesRead;
        while ((thumbnailBytesRead = thumbnailInputStream.read(thumbnailBuffer)) != -1) {
            thumbnailOutputStream.write(thumbnailBuffer, 0, thumbnailBytesRead);
        }
        thumbnailOutputStream.flush();
        thumbnailOutputStream.close();
        thumbnailInputStream.close();
        System.out.println("no error for thumbnail");

        return saveFilePath;
    }
}