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
<div class="open-question-wrap">
    <h4 class="fnt fnt-extraBold fnt-large">Electronics circuits for GCE OLs English Medium</h4>
    <p class="fnt fnt-light fnt-mid">Help with the 2016 OL electronics question through a zoom session.
        Any time on weekends is fine.
    </p>
    <div class="open-question-message-wrap">
        <div class="open-question-chat">
            <div class="open-question-msg open-question-incomMSG"><p> hi madam, I am Senith<br> Is it possible to have the session related to my question on friday this week?</p></div>
            <br>
            <div class="open-question-msg open-question-outgoingMSG"> <p>Yeah, Sure</p></div>
            <br>

            <div class="open-question-msg open-question-incomMSG"><p> hi <br> In which time madam?<br></p></div>
            <br>
            <div class="open-question-msg open-question-outgoingMSG"> <p>Can it be at 9.30a.m</p></div>
            <br>

            <div class="open-question-msg open-question-incomMSG"><p> Ok madam, Thank you</p></div>
            <br>



        </div>
        <div class="open-question-msgBox">
            <form action="#">
                <input type="text" name="message"  class="fnt" placeholder="Type your response" >

                <span class="material-icons">attach_file</span>
                <jsp:include page="send_button.jsp"/>
            </form>


        </div>
    </div>

    <div class="open-question-teacherDtls">
        <!-- replace this with the component -->
        <div class="profilepic-card">
            <div class="pic-container">
                <img src="../static/img/components_images/R.jpg" alt="profile picture" srcset="">

            </div>
            <div class="name-container">
                <h5 class="fnt fnt-bold fnt-small">Senith Uthsara Karunarathne</h5>
                <h6 class="fnt fnt-small">Professional Video Editor</h6>
            </div>
        </div>
        <!--  -->
    </div>
</div>

</body>
</html>