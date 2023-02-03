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
    <h3>Lets publish your question</h3><br>
    <div class="inputs">
        <div class="input-field">
            <label for="">Enter an appropriate title for your question.</label><br><br>
            <input type="text" required placeholder="Question Title">
        </div><br><br>


        <div class="input-field">
            <label for="">Enter your question, describe what you want.</label><br><br>
            <textarea class="description_box" name="description_box" rows="7" cols="40" placeholder="Enter question description here"></textarea>
        </div>

        <div class="input-field">
            <label for="">Question Image
                <p style="color: #767676; margin: 10px 0;">Upload your question image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
        </div>

        <input type="file" class="myFile" name="filename"><br><br>

        <img src="images/upload_question.svg" width="330px" height="250px" style="border: 0.5px solid black";>

    </div>
</div>
</body>
</html>
