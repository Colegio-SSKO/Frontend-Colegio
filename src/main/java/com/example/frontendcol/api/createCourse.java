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

@WebServlet(name = "createCourse", value = "/api/createCourse/*")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 20, // 20MB
        maxFileSize = 1024 * 1024 * 100000, // 100000MB
        maxRequestSize = 1024 * 1024 * 5000000 // 5000000MB
)
public class createCourse extends HttpServlet {
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
        List<String> videoPaths = new ArrayList<>();
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
                }
                else if (contentType.startsWith("video/")){

                    videoPaths.add(handleVideo(file, request, randomNumber));
                }



            }

            if (thumbnailPath.equals("")){
                System.out.println("Thumbnail not saved");
            }
            else if(videoPaths.size()==0){
                System.out.println("videos not saved");
            }
            else {


                jsonObject.put("thumbnail", thumbnailPath);

                JSONArray jsonArray = new JSONArray();
                videoPaths.forEach(path->{
                    JSONObject videoPath = new JSONObject();
                    videoPath.put("path", path);
                    jsonArray.put(videoPath);
                });
                jsonObject.put("videos" , jsonArray);
                System.out.println("files saved");
                jsonObject.put("isError", false);
                PrintWriter out = response.getWriter();
                out.println(jsonObject);

            }


        }catch (Exception exception){
            exception.printStackTrace();
        }

    }




    public static String handleThumbnail(Part thumbnail, HttpServletRequest request, Integer randomNumber) throws IOException{
        //user id ek session eken gnna dnt hardcode krnw
        Integer userID = 1123;
        String thumbnailFilename = "tbn" + userID + randomNumber +thumbnail.getSubmittedFileName();
        thumbnailFilename = thumbnailFilename.replace(" ", "");


        ServletContext context = request.getServletContext();
        String relativePath = "";
        String thumbnailPath = context.getRealPath(relativePath);

        String saveFilePath = "../../src/main/webapp/static/img/quiz_img"+thumbnailFilename;
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
        saveFilePath=".."+saveFilePath.split("webapp")[1];

        return saveFilePath;

    }


    public static String handleVideo(Part video, HttpServletRequest request, Integer randomNumber) throws IOException{
        //user id ek session eken gnna dnt hardcode krnw
        Integer userID = 1123;
        String videoFilename = "tbn" + userID + randomNumber +video.getSubmittedFileName();
        videoFilename = videoFilename.replace(" ", "");


        ServletContext context = request.getServletContext();
        String relativePath = "";
        String videoPath = context.getRealPath(relativePath);


        String saveFilePath = "../../src/main/webapp/static/img/quiz_img"+videoFilename;
        File savedVideoFile = new File(videoPath, saveFilePath);
        InputStream videoInputStream = video.getInputStream();
        OutputStream videoOutputStream = new FileOutputStream(savedVideoFile);
        byte[] videoBuffer = new byte[1024];
        int videoBytesRead;
        while ((videoBytesRead = videoInputStream.read(videoBuffer)) != -1) {
            videoOutputStream.write(videoBuffer, 0, videoBytesRead);
        }
        videoOutputStream.flush();
        videoOutputStream.close();
        videoInputStream.close();
        System.out.println("no error for videos");
        System.out.println(saveFilePath);

        saveFilePath=".."+saveFilePath.split("webapp")[1];
        return saveFilePath;
    }

}
