<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <jsp:include page="imports.jsp"/>

    <title>Document</title>
</head>

<body>
    <div class="comment-main">
        <div class="comment-about">
            <h3 class="fnt fnt-bold fnt-large">Video editing basics</h3>
            <p class="fnt fnt-light fnt-mid">Video Editing is all about practice. In the course, you will come across different subjects and concepts. The basics include editing videos, removing and including sound, correcting the colors, managing the picture, bringing continuity in the video, and adding some special effects. These are all requirements for a video editor to start with. There could be many advanced level editing concepts in the same field of study</p>


            <jsp:include page="ratings.jsp"/>
            <div class="comment-profile">
                <div class="comment-author">
                    <img src="../static/img/components_images/profile_picture_(1).png" alt="">
                </div>
                <div class="comment-author-name">
                    <h3 class="fnt fnt-bold fnt-small">George gunathilake</h3>
                    <p class="fnt fnt-small">Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>


        <div class="comment-cmnt">
            <div class="comment-comment-box">
                <img src="../static/img/components_images/pro.png" alt="">
                <form action="submit">
                    <input type="text" placeholder="Comment here...">
                    <button type="submit"></button>
                </form>
            </div>

            <div class="comment-comments">
                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/boy.jpeg" alt="">
                    <p class="fnt fnt-mid">This helpful me to improve my video editing knowledge
                    </p>
                </div><br><br>

                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/boy2.jpeg" alt="">
                    <p class="fnt fnt-mid">Superb course.. highly recommended
                    </p>
                </div>
            </div>
        </div>

    </div>

</body>

</html>