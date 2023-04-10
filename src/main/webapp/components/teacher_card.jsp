<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <jsp:include page="imports.jsp"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<div class="teacher-card-wrap">

    <div class="teacher-card-image">
        <img src="../static/img/components_images/elec.jpg" alt="course image"><br/>
    </div>


    <div class="teacher-card-details">
        <h5 class="fnt fnt-bold fnt-large"><a href="/viewCourses" style="text-decoration: none">Sachini Usha</a></h5>
        <h5 class="fnt fnt-bold fnt-mid">I am the best teacher</h5>
        <jsp:include page="ratings.jsp"/>
    </div>

    <h3 class="fnt-small fnt-light"><a href="">Remove</a></h3>

</div>
</body>
</html>