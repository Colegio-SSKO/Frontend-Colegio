document.addEventListener("click", (ev)=>{
    let {target} = ev;
    if(!target.matches(" a")){
        return;
    }
    else{
        ev.preventDefault();
        router(ev);
    }
});



const Routes = {
    404 : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/SPAroutes/pagenotfound.html",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        title: "Home",
        data : "This is the home page"
    },


    "/about" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/SPAroutes/about.html",
        title: "about",
        data : "This is the about page"
    },


    "/viewCourses" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/View_course2_left.jsp",
        path_right: "/views/View_course2_right.jsp",
        script: "../static/viewsJS/Student_view_courses_new.js",
        title: "My Courses",
        data : "This is the contact page"
    },

    "/create_course" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Create_course_left.jsp",
        path_right: "/views/Create_course_right.jsp",
        script: "../static/viewsJS/create_course.js",
        title: "Create Course",
        data : "This is the create course page"
    },

    "/question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/question1.js",
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

    "/publish_question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/publish_question_left.jsp",
        path_right: "/views/publish_question_right.jsp",
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

    "/create_quiz" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Create_quiz_left.jsp",
        path_right: "/views/Create_quiz_right.jsp",
        title: "Create quiz",
        data : "This is the  create quiz page"
    },

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
        script: "../static/viewsJS/View_cart2.js",
        path_right: "",
        title: "cart",
        data : "This is cart page"
    },

    "/notification" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Notification.jsp",
        path_right: "",
        title: "Notification",
        data : "This is the notification page"
    },

    "/edit_profile" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/",
        script: "../static/viewsJS/edit_profile1.js",
        path_right: "",
        title: "Notification",
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
        script: "../static/viewsJS/change_password.js",
        path_right: "",
        title: "Notification",
        data : "This is the notification page"
    },


    "/organization" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Organization_view.jsp",
        script: "../static/viewsJS/organization_view.js",
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
        script: "../static/viewsJS/Organization_profile_new1.js",
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

    "/generate_report" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/genarate_report(course)1.js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },

    "/report_course" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/view_reported_courses.js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },

    "/generate_report_quiz" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/genarate_report(quiz).js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },

    "/report_quiz" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/view_reported_quizzes.js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },


    "/report_person" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/view_reported_person1.js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },

    "/generate_report_person" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/report_content.jsp",
        script: "../static/viewsJS/genarate_report(user).js",
        path_right: "",
        title: "report",
        data : "This is the report page"
    },
};


const router = (ev) =>{
    window.history.pushState({}, "", ev.target.href);
    urlLocation();


};


const urlLocation = async () =>{
    let location = window.location.pathname;

    //setting the location to "/" if path is empty
    if (location.length==0){
        location = "/";
    }

    //if the path is /SPAroutesTeacher/index_single.jsp change it to "/"
    // uncomment this after adding the signup and login
    // if(location == "/SPAroutesTeacher/index.jsp"){
    //     alert("www")
    //     window.history.pushState({}, "", "/");
    // }


    const route = Routes[location] || Routes[404];

    //fetching the template
    let html_template = await fetch(route.template).then((response)=>
        response.text()
    );


    //rendering the appropriate template
    document.querySelector(".cont-body").innerHTML = html_template;


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

};

urlLocation();