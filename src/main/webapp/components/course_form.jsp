<%--
  Created by IntelliJ IDEA.
  User: CS COMPUTERS
  Date: 1/30/2023
  Time: 9:42 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<%--    <link rel="stylesheet" href="course_form.css">--%>
</head>
<body>
<div class="form">
    <h3 class="fnt fnt-bold fnt-large">Lets create your Course</h3><br>
    <div class="inputs">
        <div class="input-field">
            <label for="" class="fnt fnt-mid">Select a unique title for your Course.</label><br><br>
            <input type="text" required placeholder="Course Title">
        </div><br><br>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Select the most appropriate category for your course.</label><br><br>
            <input type="text" required placeholder="Mathematics/ Science/ English...">
        </div><br><br>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Give your course a good description.</label><br><br>
            <textarea class="description_box" name="description_box" rows="7" cols="40" placeholder="Enter course description here"></textarea>
        </div>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Course Thumbnail image
                <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
            <img src="images/upload_question.svg" width="330px" height="250px" style="border: 0.5px solid black";>
        </div>

        <input type="file" class="myFile" name="filename">

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Course Content Sections <br>
                <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
            </label>
        </div>
    </div>
</div>
</body>
</html>