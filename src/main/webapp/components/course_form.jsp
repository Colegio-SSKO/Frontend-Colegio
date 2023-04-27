
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
        <div class="course_form">
            <h3 class="fnt fnt-bold fnt-large">Lets create your Course</h3><br>
            <div class="inputs">
                <div class="input-field">
                    <label for="" class="fnt fnt-mid fnt-bold">Select a unique title for your Course.</label><br><br>
                    <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Course Title">
                </div><br><br>

                <div class="input-field">
                    <label for="" class="fnt fnt-mid fnt-bold">Select the most appropriate category for your course.</label><br><br>
                    <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Mathematics/ Science/ English...">
                </div><br><br>

                <div class="input-field">
                    <label for="" class="fnt fnt-mid fnt-bold">Give your course a good description.</label><br><br>
                    <textarea class="fnt fnt-mid fnt-light description_box" name="description_box" rows="7" cols="40" placeholder="Enter course description here"></textarea>
                </div><br><br>

                <div class="input-field">
                    <label for="" class="fnt fnt-mid fnt-bold">Course Thumbnail image
                        <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                </div>

                <input type="file" class="myFile fnt fnt-light fnt-mid" name="filename"><br><br>

                <div class="upload_pic"></div><br><br>

                <div class="input-field">
                    <label for="" class="fnt fnt-mid fnt-bold">Course Content Sections <br>
                        <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid fnt-light">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
                    </label>

                    <jsp:include page="../components/course_video_upload.jsp"/>
                </div>



            </div>
        </div>
    </form>

</body>
</html>