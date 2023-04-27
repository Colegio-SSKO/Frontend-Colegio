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
    <form>
        <div class="option_box">
            <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Enter title here"><br><br>
            <textarea class="fnt fnt-mid fnt-light description_box" name="description_box" rows="4" cols="30" placeholder="description"></textarea>&nbsp;&nbsp; &nbsp;<input type="file" class="myFile fnt fnt-light fnt-mid" name="filename">
            <div class="add"><button>+</button></div>
        </div>
    </form>

</body>
</html>