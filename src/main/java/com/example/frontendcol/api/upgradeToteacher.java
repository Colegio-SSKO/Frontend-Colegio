package com.example.frontendcol.api;

import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Random;
import org.json.JSONObject;
import org.json.JSONArray;

@WebServlet(name = "upgradeToteacher", value = "/api/upgradeToteacher/*")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 20, // 20MB
        maxFileSize = 1024 * 1024 * 100000, // 100000MB
        maxRequestSize = 1024 * 1024 * 5000000 // 5000000MB
)
public class upgradeToteacher extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //generating a random number to add to the file name
        Integer min = 1;
        Integer max = 10000000;

        Random random = new Random();
        Integer randomNumber  = random.nextInt((max-min) + 1) + min;



        Collection<Part> files = request.getParts();

        String contentType = "";

        String thumbnailPath = "";
//        List<String> videoPaths = new ArrayList<>();
        System.out.println("create course eke inne");

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("isError", true);

        try {
            for (Part file : files) {
                contentType = file.getContentType();

                //handle thumbnail
                if(contentType ==null){
                    System.out.println("invalid file type");
                }

                else if (contentType.startsWith("image/")){
                    thumbnailPath = handleThumbnail(file, request, randomNumber);
                    System.out.println(thumbnailPath);
                }

                if (thumbnailPath.equals("")){
                    System.out.println("Thumbnail not saved");
                }

                else {


                    jsonObject.put("thumbnail", thumbnailPath);
                    System.out.println("meka wada");

                    jsonObject.put("isError", false);
                    PrintWriter out = response.getWriter();
                    out.println(jsonObject);

                }
            }

        }catch (Exception exception){
            System.out.println(exception);
        }

    }




    public static String handleThumbnail(Part thumbnail, HttpServletRequest request, Integer randomNumber) throws IOException{
        //user id ek session eken gnna dnt hardcode krnw
        Integer userID = 1123;
        String thumbnailFilename = "mge" + userID + randomNumber +thumbnail.getSubmittedFileName();
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
