<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../desciption_heading/descHead.css">

    <jsp:include page="imports.jsp"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="open-course-wrap">
        <div class="open-course-image">
            <img src="images/video.jpg" alt="">
        </div>

        <jsp:include page="ratings.jsp"/>

        <h4 class="open-course-title">Video editing for beginners </h4>
        <p class="open-course-desc">The basics include editing videos, removing and including sound, correcting the colors, 
            managing the picture, 
            bringing continuity in the video, and adding some special effects. 
            These are all requirements for a video editor to start with, and let me guide you through your journey.
        </p>

        <div class="open-course-author"></div>
        <div class="open-course-cont">

            <!-- clear this div -->
            <jsp:include page="descHead.jsp"/>
            <jsp:include page="descHead.jsp"/>


        </div>
    </div>



</body>
</html>