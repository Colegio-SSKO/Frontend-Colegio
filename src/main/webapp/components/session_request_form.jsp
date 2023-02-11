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
    <jsp:include page="imports.jsp"/>
</head>
<body>
<div class="session_request_form">
    <form>
        <h3 class="fnt fnt-bold fnt-large">Lets publish your session request</h3>
        <div class="inputs">
            <div class="input-field fnt fnt-light fnt-mid">
                <label for="">Enter an appropriate title for your session request.</label><br><br>
                <input type="text" required placeholder="Session Title">
            </div><br><br>


            <div class="input-field fnt fnt-light fnt-mid">
                <label for="">Enter your session requirement, describe what you want.</label><br><br>
                <textarea class="description_box" name="description_box" rows="7" cols="40" placeholder="Enter session description here"></textarea>
            </div>

        </div>
    </form>
</div>
</body>
</html>