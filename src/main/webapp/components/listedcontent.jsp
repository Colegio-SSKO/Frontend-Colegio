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
            <img src="images/elec.jpg" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5>Electronics basics for GCE ALs</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6>by Senith Uthsara</h6>

                    <jsp:include page="ratings.jsp"/>
                </div>
            </div>
            <p>
                Learn about Electronics in a way catered towards your ALs, fundemantals straight to master level.
            </p>
        </div>
        
    </div>
</body>
</html>