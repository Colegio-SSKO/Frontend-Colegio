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
    <link rel="stylesheet" href="course_form.css">
</head>
<body>
<div class="form">
    <h3>Lets create your Quiz</h3><br>
    <div class="inputs">
        <div class="input-field">
            <label for="">Select a unique title for your quiz.</label><br><br>
            <input type="text" required placeholder="Quiz Title">
        </div><br><br>

        <div class="input-field">
            <label for="">Select the most appropriate category for your quiz.</label><br><br>
            <input type="text" required placeholder="Mathematics/ Science/ English...">
        </div><br><br>

        <div class="input-field">
            <label for="">Give your quiz a good description.</label><br><br>
            <textarea class="description_box" name="description_box" rows="7" cols="40" placeholder="Insert quiz description here"></textarea>
        </div>

        <div class="input-field">
            <label for="">Quiz Thumbnail image
                <p style="color: #767676; margin: 10px 0;">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
        </div>

        <input type="file" class="myFile" name="filename">

        <div class="input-field">
            <label for="">Quiz Questions <br>
                <p style="color: #767676; margin: 10px 0">Add your quiz question here</p>
            </label>
        </div>

        <jsp:include page="option_box.jsp"/>
    </div>
</div>
</body>
</html>
