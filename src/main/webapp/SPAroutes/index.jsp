<!DOCTYPE html>
<html lang="en">
<head>


    <link rel="stylesheet" href="../static/css/views_styles.css">
    <link rel="stylesheet" href="../static/css/style.css">
    <link rel="stylesheet" href="../static/css/html_template.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="basic.js">

    </script>


</head>
<body>

<div id="components">
    <script src="../components2/accepted.js"></script>
    <script src="../components2/descHead.js"></script>
    <script src="../components2/featured_cont.js"></script>
    <script src="../components2/listedcontent.js"></script>
    <script src="../components2/notification.js"></script>
    <script src="../components2/open_course.js"></script>
    <script src="../components2/open_question.js"></script>
    <script src="../components2/profile_card.js"></script>
    <script src="../components2/Q-1.js"></script>
    <script src="../components2/Q-2.js"></script>
    <script src="../components2/Q-3.js"></script>
    <script src="../components2/question.js"></script>
    <script src="../components2/quiz_question.js"></script>
    <script src="../components2/send_button.js"></script>
    <script src="../components2/small-listed.js"></script>
    <script src="../components2/with_titles.js"></script>
    <script src="../components2/without_title.js"></script>
    <script src="../components2/help.js"></script>
    <script src="../components2/ratings.js"></script>
    <script src="../components2/startQuiz.js"></script>
    <script src="../components2/comment.js"></script>
    <script src="../components2/course_form1.js"></script>
    <script src="../components2/edit_profile.js"></script>
    <script src="../components2/cart_item.js"></script>
    <script src="../components2/organization_card.js"></script>
    <script src="../components2/organization_list.js"></script>
    <script src="../components2/contentList.js"></script>
    <script src="../components2/organization_profile_card.js"></script>
    <script src="../components2/teacher_list.js"></script>
    <script src="../components2/teacher_card.js"></script>
    <script src="../components2/teacherlist.js"></script>
    <script src="../components2/cart_total_price.js"></script>
    <script src="../components2/organization_profile_card(stu).js"></script>
    <script src="../components2/edit_profile.js"></script>
    <script src="../components2/edit_email.js"></script>
    <script src="../components2/change_password.js"></script>
    <script src="../components2/Q-4.js"></script>
    <script src="../components2/popup.js"></script>
    <script src="../components2/quiz_number.js"></script>
    <script src="../components2/open_question_question.js"></script>
    <script src="../components2/search_main_course.js"></script>
    <script src="../components2/search_main_quiz.js"></script>
    <script src="../components2/search_main_results.js"></script>
    <script src="../components2/open_course_video_play.js"></script>
    <script src="../components2/navbar.js"></script>





</div>

<div id="viewsScript">

</div>


<div class="main-cont">
    <div class="main-left">
        <jsp:include page="../components/sidebar.jsp"/>
        <div class="burger">
            <div class="burgerbar burger-up"></div>
            <div class="burgerbar burger-middle"></div>
            <div class="burgerbar burger-down"></div>
        </div>
    </div>

    <div class="main-right">

        <nav-bar></nav-bar>


        <div class="cont-body">



        </div>

    </div>
</div>








<div id="mainScript">
    <script src="index.js"></script>
</div>

<%--handle back button--%>
<script>
    window.addEventListener("popstate", () => {
        urlLocation();
    })


</script>

<script>

    let menu = document.querySelector(".burger");
    let up = document.querySelector(".burger-up");
    let middle = document.querySelector(".burger-middle");
    let down = document.querySelector(".burger-down");
    let sidebar = document.querySelector(".main-left");
    let mainRight = document.querySelector(".main-right");
    menu.addEventListener("click", ()=>{
        up.classList.toggle("burgerbar-up-clicked");
        middle.classList.toggle("burgerbar-middle-clicked");
        down.classList.toggle("burgerbar-down-clicked");
        sidebar.classList.toggle("sidebar-clicked");
        mainRight.classList.toggle("main-right-clicked");
        menu.classList.toggle("burger-clicked");
    });
</script>

</body>
</html>