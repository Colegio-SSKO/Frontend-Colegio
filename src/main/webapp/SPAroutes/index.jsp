<!DOCTYPE html>
<html lang="en">
<head>

    <style>
        #js-forgotpassword-input-wrap {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .preloader {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            z-index: 9999;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;


        }

        .spinner {


            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid #007bff;
            border-top-color: transparent;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }




        .fadeInanimation {
            animation-name: fadeInRight;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }

        @keyframes fadeInRight {
            from {
                transform: translateX(20px);
                opacity: 0.5;
            }
            to {
                transform: translateX(0px);
                opacity: 1;
            }
        }

    </style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet">



    <link rel="stylesheet" href="../static/css/loginStyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/da4dde32c9.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="../static/css/views_styles.css">
    <link rel="stylesheet" href="../static/css/style.css">
    <link rel="stylesheet" href="../static/css/html_template.css">
    <link rel="shortcut icon" href="../static/img/components_images/COllegio.png" type="image/x-icon">

    <link rel="stylesheet" href="../static/css/style.css">
<%--    <link rel="stylesheet" href="../static/css/styleOrg.css">--%>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colegio | Educational Platform</title>


<%--    //payhere--%>

    <script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js"></script>
    <script src="basic.js">

    </script>

    <script src="webSockets1.js"></script>



</head>
<body>

<div id="components">
    <script src="../components2/accepted.js"></script>
    <script src="../components2/descHead.js"></script>
    <script src="../components2/featured_cont.js"></script>
    <script src="../components2/listedcontent.js"></script>
    <script src="../components2/notification.js"></script>
    <script src="../components2/open_course.js"></script>
    <script src="../components2/open_question1.js"></script>
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
    <script src="../components2/course_form.js"></script>
    <script src="../components2/cart_item.js"></script>
    <script src="../components2/organization_card.js"></script>
    <script src="../components2/organization_list.js"></script>
    <script src="../components2/contentList.js"></script>
    <script src="../components2/organization_profile_card.js"></script>
    <script src="../components2/teacher_list.js"></script>
    <script src="../components2/teacher_card.js"></script>
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
    <script src="../components2/small_card_open_com.js"></script>

    <script src="../components2/search_quiz_open.js"></script>
    <script src="../components2/search_main_teacher.js"></script>
    <script src="../components2/search_main_organization.js"></script>
    <script src="../components2/signin1.js"></script>
    <script src="../components2/signin.js"></script>
    <script src="../components2/signup.js"></script>
    <script src="../components2/profile_upgrade_form.js"></script>
    <script src="../components2/follow_course.js"></script>
    <script src="../components2/teacher_published_course_quiz_card.js"></script>
    <script src="../components2/published_course_quiz_list(teacher).js"></script>
    <script src="../components2/sidebar_normalUser.js"></script>
    <script src="../components2/navbar_noramlUser.js"></script>
    <script src="../components2/sidebar.js"></script>
    <script src="../components2/navbar1.js"></script>
    <script src="../components2/sidebar_teacher.js"></script>
    <script src="../components2/Ans_q1.js"></script>
    <script src="../components2/Ans_q2.js"></script>
    <script src="../components2/send_answers.js"></script>
    <script src="../components2/comment-container.js"></script>
    <script src="../components2/comment_container_list.js"></script>
    <script src="../components2/quiz-form.js"></script>
    <script src="../components2/teacher_profile_card.js"></script>
    <script src="../components2/edit_profileTeacher.js"></script>
    <script src="../components2/upgrade_form_org.js"></script>
    <script src="../components2/question_form.js"></script>
    <script src="../components2/organization_card(teacher)withleave.js"></script>
    <script src="../components2/organization_list(teacher)2.js"></script>

    <script src="../components2/invite_teacher.js"></script>
    <script src="../components2/teacher_listOrg.js"></script>


    <script src="../components2/ad_section.js"></script>
    <script src="../components2/ad_list.js"></script>
    <script src="../components2/organization_profile_card_adpublish(stu).js"></script>
    <script src="../components2/ad_publish_form.js"></script>
    <script src="../components2/notification_msg.js"></script>





    <script src="../components2/organization_list(teacher).js"></script>
    <script src="../components2/organization_card(teacher).js"></script>
    <script src="../components2/teacher_cardOrg.js"></script>
    <script src="../components2/search_result.js"></script>
    <script src="../components2/search_resultlist.js"></script>
    <script src="../components2/edit_profile(Org).js"></script>
    <script src="../components2/notification_msg1.js"></script>
    <script src="../components2/notification_msg3.js"></script>
    <script src="../components2/notification_msg5.js"></script>
    <script src="../components2/notification_msg6.js"></script>
    <script src="../components2/chat_box.js"></script>
    <script src="../components2/chat_list.js"></script>
    <script src="../components2/chat_msg.js"></script>
    <script src="../components2/chat_list_item.js"></script>
    <script src="../components2/chat_new_full.js"></script>
    <script src="../components2/chat.js"></script>
    <script src="../components2/item_buying_right.js"></script>
    <script src="../components2/item_buying_right_quiz.js"></script>
    <script src="../components2/quiz_results.js"></script>




    <script src="../components2/forgotPassword.js"></script>





</div>

<div id="viewsScript">

</div>


<div class="main-cont">

    <div class="main-left">
        <div id="sidebar-containter">
        </div>

        <div class="burger">
            <div class="burgerbar burger-up"></div>
            <div class="burgerbar burger-middle"></div>
            <div class="burgerbar burger-down"></div>
        </div>
    </div>

    <div class="main-right">

        <div id="navbar-container">

        </div>



        <div class="cont-body">


        </div>

    </div>
</div>








<div id="mainScript">
    <script src="index.js"></script>
</div>
<chat-last></chat-last>

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
    let sidebarEl = document.querySelector(".main-left");
    let mainRight = document.querySelector(".main-right");
    menu.addEventListener("click", ()=>{
        up.classList.toggle("burgerbar-up-clicked");
        middle.classList.toggle("burgerbar-middle-clicked");
        down.classList.toggle("burgerbar-down-clicked");
        sidebarEl.classList.toggle("sidebar-clicked");
        mainRight.classList.toggle("main-right-clicked");
        menu.classList.toggle("burger-clicked");
    });
</script>






</body>
</html>