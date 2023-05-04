


document.addEventListener("click", (ev)=>{
    let {target} = ev;
    if(target.matches(" a")){
        ev.preventDefault();
        router(target.href);
    }
    else if(target.classList.contains("is-a-route")){
        ev.preventDefault();
        router(target.parentElement.href)
    }
    else{
        return;
    }
});



const studentRoutes = {
    404 : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/SPAroutes/pagenotfound.html",
        script: "../static/viewsJS/notfound1.js",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/home.js",
        title: "Home",
        data : "This is the home page"
    },


    "/test" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/main_search1.js",
        title: "Home",
        data : "This is the home page"
    },

    "/small_cardopen" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/small_card_open_new.js",
        title: "small card open",
        data : "This is the home page"
    },

    "/quiz_serachopen" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/quiz_purchase_search.js",
        title: "small card open",
        data : "This is the home page"
    },



    // "/about" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/SPAroutes/about.html",
    //     title: "about",
    //     data : "This is the about page"
    // },


    "/viewCourses" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/View_course2_left.jsp",
        path_right: "/views/View_course2_right.jsp",
        script: "../static/viewsJS/Student_view_courses1.js",
        title: "My Courses",
        data : "This is the contact page"
    },

    // "/create_course" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Create_course_left.jsp",
    //     path_right: "/views/Create_course_right.jsp",
    //     script: "../static/viewsJS/create_course.js",
    //     title: "Create Course",
    //     data : "This is the create course page"
    // },

    "/question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/Student_question.js",
        title: "Question",
        data : "This is the Question page"
    },

    // "/session_request" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Session_request_left.jsp",
    //     path_right: "/views/Session_request_right.jsp",
    //     title: "Session Request",
    //     data : "This is the Session request page"
    // },

    "/publish_question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/publish_question_left.jsp",
        path_right: "/views/publish_question_right.jsp",
        script: "../static/viewsJS/userPublishQuestion.js",
        title: "Publish Question",
        data : "This is the Publish question page"
    },

    "/profile" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        script: "../static/viewsJS/Student_profile_new.js",
        path_right: "",
        title: "profile",
        data : "This is the profile page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        path_right: "/views/Quiz_teacher_org1_right.jsp",
        script: "../static/viewsJS/Student_view_quizzes1.js",
        title: "Quizzes",
        data : "This is the quiz page"
    },

    // "/create_quiz" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Create_quiz_left.jsp",
    //     path_right: "/views/Create_quiz_right.jsp",
    //     title: "Create quiz",
    //     data : "This is the  create quiz page"
    // },

    // "/start_quiz" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Start_quiz_left.jsp",
    //     path_right: "/views/Start_quiz_right.jsp",
    //     title: "Start Quiz",
    //     data : "This is the start quiz page"
    // },

    "/cart" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/view_cart.jsp",
        script: "../static/viewsJS/View_cart.js",
        path_right: "",
        title: "Cart",
        data : "This is cart page"
    },

    "/notification" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Notification.jsp",
        path_right: "",
        script: "../static/viewsJS/notification_view.js",
        title: "Notification",
        data : "This is the notification page"
    },

    "/edit_profile" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/edit_profile.js",
        path_right: "",
        title: "Edit Profile",
        data : "This is the notification page"
    },

    "/edit_email" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/edit_email.js",
        path_right: "",
        title: "Edit Email",
        data : "This is the notification page"
    },

    "/change_password" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/change_password2.js",
        path_right: "",
        title: "Change password",
        data : "This is the notification page"
    },

    "/upgrade" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/Upgrade_account.js",
        path_right: "",
        title: "Upgrade to teacher",
        data : "This is the notification page"
    },

    "/upgrade_to_org" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/Upgrade_account_Org.js",
        path_right: "",
        title: "Upgrade to organization",
        data : "This is the notification page"
    },


    "/organization" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_view.jsp",
        script: "../static/viewsJS/organization_view1.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/organization_Teachers" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Org_teacherlist_view(stu).jsp",
        script: "../static/viewsJS/teacherlist_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/Organization_profile(stu)" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/Organization_profile_new.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/teacher_course" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacher_course_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/continuecourse" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Create_quiz_left.jsp",
        path_right: "/views/Create_quiz_right.jsp",
        script: "../static/viewsJS/Student_continue_course1.js",
        title: "Follow Course",
        data : "This is the follow course page"
    },

    "/teacher_published_course" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_course_list(teacher).js",
        title: "profile",
        data : "This is the profile page"
    },

    "/teacher_published_quiz" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_quiz_list(teacher).js",
        title: "profile",
        data : "This is the profile page"
    },

    "/teacher_content" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacher_content_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },





};

const teacherRoutes =  {
    404 : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/SPAroutes/pagenotfound.html",
        script: "../static/viewsJS/notfound1.js",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/home.js",
        title: "Home",
        data : "This is the home page"
    },


    // "/about" : {
    //     isSingle : false,
    //     template : "/SPAroutesTeacher/index_double.jsp",
    //     path_left:"/SPAroutesTeacher/about.html",
    //     title: "about",
    //     data : "This is the about page"
    // },


    "/viewCourses" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/View_course2_left.jsp",
        path_right: "/views/View_course2_right.jsp",
        script: "../static/viewsJS/teacher_view_courses.js",
        title: "My Courses",
        data : "This is the contact page"
    },

    "/create_course" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Create_course_left.jsp",
        path_right: "/views/Create_course_right.jsp",
        script: "../static/viewsJS/create_course2.js",
        title: "Create Course",
        data : "This is the create course page"
    },

    "/question" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/Student_question.js",
        title: "Question",
        data : "This is the Question page"
    },


    "/answer_question" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/teacher_answer_questions1.js",
        title: "Answer Question",
        data : "This is the Question page"
    },


    "/session_request" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Session_request_left.jsp",
        path_right: "/views/Session_request_right.jsp",
        title: "Session Request",
        data : "This is the Session request page"
    },

    "/publish_question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/publish_question_left.jsp",
        path_right: "/views/publish_question_right.jsp",
        script: "../static/viewsJS/userPublishQuestion.js",
        title: "Publish Question",
        data : "This is the Publish question page"
    },

    "/profile" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/teacher_profile(teacher).js",
        title: "profile",
        data : "This is the profile page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        path_right: "/views/Quiz_teacher_org1_right.jsp",
        script: "../static/viewsJS/teacher_view_quizzes.js",
        title: "Quizzes",
        data : "This is the quiz page"
    },

    "/teacher_organizations" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        script: "../static/viewsJS/Organization_profile_adpublish.js",
        title: "Teacher organizations",
        data : "This is the quiz page"
    },

    // "/teacher_organizations" : {
    //     isSingle : true,
    //     template : "/SPAroutesTeacher/index_single.jsp",
    //     path_left:"/views/Quiz_teacher_org1_left.jsp",
    //     script: "../static/viewsJS/organizations_of_teacher.js",
    //     title: "Teacher organizations",
    //     data : "This is the quiz page"
    // },


    "/publish_yourad" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        script: "../static/viewsJS/ad_publish_teacher.js",
        title: "publish ads",
        data : "This is the quiz page"
    },

    "/create_quiz" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Create_quiz_left.jsp",
        path_right: "/views/Create_quiz_right.jsp",
        title: "Create quiz",
        data : "This is the  create quiz page"
    },

    // "/start_quiz" : {
    //     isSingle : false,
    //     template : "/SPAroutesTeacher/index_double.jsp",
    //     path_left:"/views/Start_quiz_left.jsp",
    //     path_right: "/views/Start_quiz_right.jsp",
    //     title: "Start Quiz",
    //     data : "This is the start quiz page"
    // },

    "/cart" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/view_cart.jsp",
        script: "../static/viewsJS/View_cart.js",
        path_right: "",
        title: "Cart",
        data : "This is the cart page"
    },

    "/notification" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Notification.jsp",
        path_right: "",
        script: "../static/viewsJS/notification_view.js",
        title: "Notification",
        data : "This is the notification page"
    },

    "/organization" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_view.jsp",
        script: "../static/viewsJS/organization_view(teacher).js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/organization_Teachers" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Org_teacherlist_view(stu).jsp",
        script: "../static/viewsJS/teacherlist_view.js",
        path_right: "",
        title: "Teachers",
        data : "This is the notification page"
    },

    "/teacher_content" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacher_content_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/Organization_profile(stu)" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/Organization_profile_new.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/edit_profileTeacher" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/edit_profile_teacher1.js",
        path_right: "",
        title: "Edit Profile",
        data : "This is the edit profile page"
    },
    "/edit_email" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/edit_email.js",
        path_right: "",
        title: "Edit Privacy",
        data : "This is the notification page"
    },

    "/change_password" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/change_password2.js",
        path_right: "",
        title: "Edit Privacy",
        data : "This is the notification page"
    },

    "/teacher_published_course" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_course_list(teacher).js",
        title: "Manage my courses",
        data : "This is the manage my course page"
    },

    "/teacher_published_quiz" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_quiz_list(teacher).js",
        title: "Manage my quizzes",
        data : "This is the manage my quizzes page"
    },

    "/createQuiz" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Start_quiz_left.jsp",
        path_right: "/views/Start_quiz_right.jsp",
        script: "../static/viewsJS/teacherCreatQuiz.js",
        title: "Start Quiz",
        data : "This is the start quiz page"
    },
    "/small_cardopen" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/small_card_open_new.js",
        title: "small card open",
        data : "This is the home page"
    },

    "/quiz_serachopen" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/quiz_purchase_search.js",
        title: "small card open",
        data : "This is the home page"
    },

    "/continuecourse" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Create_quiz_left.jsp",
        path_right: "/views/Create_quiz_right.jsp",
        script: "../static/viewsJS/Student_continue_course1.js",
        title: "Follow Course",
        data : "This is the follow course page"
    },


};

const organizationRoutes = {
    404 : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/SPAroutes/pagenotfound.html",
        script: "../static/viewsJS/notfound1.js",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/home.js",
        title: "Home",
        data : "This is the home page"
    },


    // "/about" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/SPAroutes/about.html",
    //     title: "about",
    //     data : "This is the about page"
    // },


    "/viewCourses" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/View_course2_left.jsp",
        path_right: "/views/View_course2_right.jsp",
        script: "../static/viewsJS/Student_view_courses1.js",
        title: "My Courses",
        data : "This is the contact page"
    },

    // "/create_course" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Create_course_left.jsp",
    //     path_right: "/views/Create_course_right.jsp",
    //     script: "../static/viewsJS/create_course.js",
    //     title: "Create Course",
    //     data : "This is the create course page"
    // },

    "/question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/Student_question.js",
        title: "Question",
        data : "This is the Question page"
    },

    "/session_request" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Session_request_left.jsp",
        path_right: "/views/Session_request_right.jsp",
        title: "Session Request",
        data : "This is the Session request page"
    },

    // "/publish_question" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/publish_question_left.jsp",
    //     path_right: "/views/publish_question_right.jsp",
    //     title: "Publish Question",
    //     data : "This is the Publish question page"
    // },

    "/profile" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        script: "../static/viewsJS/Organization_profile(org).js",
        path_right: "",
        title: "profile",
        data : "This is the profile page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        path_right: "/views/Quiz_teacher_org1_right.jsp",
        script: "../static/viewsJS/Student_view_quizzes1.js",
        title: "Quizzes",
        data : "This is the quiz page"
    },

    // "/create_quiz" : {
    //     isSingle : false,
    //     template : "/SPAroutes/index_double.jsp",
    //     path_left:"/views/Create_quiz_left.jsp",
    //     path_right: "/views/Create_quiz_right.jsp",
    //     title: "Create quiz",
    //     data : "This is the  create quiz page"
    // },

    "/start_quiz" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Start_quiz_left.jsp",
        path_right: "/views/Start_quiz_right.jsp",
        title: "Start Quiz",
        data : "This is the start quiz page"
    },

    "/cart" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/view_cart.jsp",
        script: "../static/viewsJS/View_cart1.js",
        path_right: "",
        title: "cart",
        data : "This is cart page"
    },

    "/notification" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Notification.jsp",
        path_right: "",
        script: "../static/viewsJS/notification_view.js",
        title: "Notification",
        data : "This is the notification page"
    },

    // "/edit_profile" : {
    //     isSingle : true,
    //     template : "/SPAroutes/index_single.jsp",
    //     path_left:"/views/",
    //     script: "../static/viewsJS/edit_profile1.js",
    //     path_right: "",
    //     title: "Notification",
    //     data : "This is the notification page"
    // },

    // "/edit_email" : {
    //     isSingle : true,
    //     template : "/SPAroutes/index_single.jsp",
    //     path_left:"/views/",
    //     script: "../static/viewsJS/edit_email.js",
    //     path_right: "",
    //     title: "Notification",
    //     data : "This is the notification page"
    // },
    //
    // "/change_password" : {
    //     isSingle : true,
    //     template : "/SPAroutes/index_single.jsp",
    //     path_left:"/views/",
    //     script: "../static/viewsJS/change_password2.js",
    //     path_right: "",
    //     title: "Notification",
    //     data : "This is the notification page"
    // },


    "/organization" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_view.jsp",
        script: "../static/viewsJS/organization_view1.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/organization_Teachers" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Org_teacherlist_view(stu).jsp",
        script: "../static/viewsJS/teacherlist_view.js",
        path_right: "",
        title: "Teachers",
        data : "This is the notification page"
    },

    "/Organization_profile(stu)" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/Organization_profile_new.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/teacher_course" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacher_content_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/myorganization_Teachers" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacherlist_view(org).js",
        path_right: "",
        title: "Teachers",
        data : "This is the notification page"
    },

    "/invite_teachers" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/invite_teacher_view1.js",
        path_right: "",
        title: "Invite Teacher",
        data : "This is the notification page"
    },

    "/edit_profileOrg" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/edit_profile_org1.js",
        path_right: "",
        title: "Invite Teacher",
        data : "This is the notification page"
    },
    "/edit_email" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/edit_email.js",
        path_right: "",
        title: "Notification",
        data : "This is the notification page"
    },

    "/change_password" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/change_password2.js",
        path_right: "",
        title: "Notification",
        data : "This is the notification page"
    },

    "/teacher_published_course" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_course_list(teacher).js",
        title: "profile",
        data : "This is the profile page"
    },

    "/teacher_published_quiz" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        script: "../static/viewsJS/published_quiz_list(teacher).js",
        title: "profile",
        data : "This is the profile page"
    },

    "/continuecourse" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Create_quiz_left.jsp",
        path_right: "/views/Create_quiz_right.jsp",
        script: "../static/viewsJS/Student_continue_course1.js",
        title: "Follow Course",
        data : "This is the follow course page"
    },

    "/teacher_content" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        script: "../static/viewsJS/teacher_content_view.js",
        path_right: "",
        title: "Organization",
        data : "This is the notification page"
    },

    "/small_cardopen" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Home_content.jsp",
        script: "../static/viewsJS/small_card_open_new.js",
        title: "small card open",
        data : "This is the home page"
    },






};





const router = (newRoute) =>{
    window.history.pushState({}, "", newRoute);
    urlLocation();


};


const urlLocation = async () =>{


    //changing the default path
    if(window.location.pathname == "/SPAroutes/index.jsp"){
        window.history.pushState({}, "", "/");

    }

    let location = window.location.pathname;

    //setting the location to "/" if path is empty
    if (location.length==0){
        location = "/";
    }

    if(location.includes("auth")){
        alert("aa")
        handleAuthRoutes(location);
    }
    else{
        handleNormalRoutes(location);
    }

};


const handleAuthRoutes = async (location) => {

    //check is signup
    let pageContent = "";
    if(location.includes("signin")){
        pageContent = `<sign-in></sign-in>`;

        alert(pageContent);
    }
    else if (location.includes("signup")){
        pageContent = `<sign-up></sign-up>`;
    }
    else if(location.includes("forgotPassword")) {
        pageContent = `<forgot-password></forgot-password>`;
    }

    else{
        window.history.pushState({}, "", "/");
        urlLocation();
    }

    document.querySelector(".cont-body").innerHTML = pageContent;


}





const handleNormalRoutes = async (location)=>{

    //selecting the appropriate route
    let Routes;
    if (getUserType() == 1){
        Routes = studentRoutes;
    }
    else if (getUserType() == 2){
        Routes = teacherRoutes;
    }
    else if(getUserType()==3){
        Routes = organizationRoutes;
    }
    else {
        Routes = studentRoutes;
    }


    const route = Routes[location] || Routes[404];

    //fetching the template
    let html_template = await fetch(route.template).then((response)=>
        response.text()
    );

    //rendering the appropriate template
    document.querySelector(".cont-body").innerHTML = html_template;


    //setting the user data
    alert("gemmmmmmak tm")
    let userData = await fetch('http://localhost:8090/api/authenticate/getUserData/', {
        method : "GET",
        credentials: 'include'
    }).then((response)=>{
        return response.json();
    })
    // alert(userData["userName"])
    // alert(userData["userType"])
    alert("is token : " +userData["isTokenPresent"])
    let isTokenPresent = userData["isTokenPresent"];
    if (isTokenPresent == 0){
        userType = 0;
    }
    else{
        username = userData["userName"];
        userID = userData["userID"];
        userProfileImage = userData["userProPic"];
        userType = userData["userType"];
    }



    //rendering nav bar and sidebar

    if (getUserType()==0){//visitor
        document.querySelector("#navbar-container").innerHTML = `<navbar-normaluser></navbar-normaluser>`;
        document.querySelector("#sidebar-containter").innerHTML = `<sidebar-normaluser></sidebar-normaluser>`;
    }
    else if(getUserType()==1 || getUserType()==3){//student
        document.querySelector("#navbar-container").innerHTML = `<nav-bar></nav-bar>`;
        document.querySelector("#sidebar-containter").innerHTML = `<side-bar></side-bar>`;
    }
    else if (getUserType()==2){ //teacher
        document.querySelector("#navbar-container").innerHTML = `<nav-bar></nav-bar>`;
        document.querySelector("#sidebar-containter").innerHTML = `<sidebar-teacher></sidebar-teacher>`;
    }

    //initializing web sockets
    alert(isSocketsStartedBefore())
    if (!isSocketsStartedBefore()){
        initiateWebsocket();
    }
    //re-executing js
    let target = document.getElementById("viewsScript");
    target.innerHTML = "";
    let script= document.createElement('script');
    script.src=route.script;
    target.appendChild(script);

    //rendering the main content(left content)
    let html_cont_left = await fetch(route.path_left).then((response)=>
        response.text()
    );

    //rendering the appropriate content
    if (route.isSingle){
        renderSingle();
    }
    else{

        renderLeft();
    }

    //changing the page name
    document.querySelector(".pagename").innerText = route.title;
}


urlLocation();


