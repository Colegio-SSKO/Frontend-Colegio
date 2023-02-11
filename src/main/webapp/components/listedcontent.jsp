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
            <img src="../static/img/components_images/elec.jpg" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5 class="fnt fnt-bold fnt-large">Electronics basics for GCE ALs</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6 class="fnt fnt-bold fnt-small">by Senith Uthsara</h6>

                    <jsp:include page="ratings.jsp"/>
                </div>
            </div>
            <p class="fnt fnt-light fnt-mid">
                Learn about Electronics in a way catered towards your ALs, fundemantals straight to master level.
            </p>
        </div>
        
    </div>
</body>
</html>