<!DOCTYPE html>
<html lang="en">
<head>

    <jsp:include page="imports.jsp"/>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="courseList-card">
        <div class="course-image">
            <img src="../static/img/components_images/maths.jpeg" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5 class="fnt fnt-bold fnt-large">A/L Combined Maths</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6 class="fnt fnt-bold fnt-small">by Sahan Kaveesha</h6>

                    <jsp:include page="ratings.jsp"/>
                </div>
            </div>
            <p class="fnt fnt-light fnt-mid">
                Studying mathematics subjects can lead to jobs in many disciplines rather than becoming a doctor or an engineer.
            </p>
        </div>
        
    </div>
</body>
</html>