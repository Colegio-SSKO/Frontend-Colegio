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
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/SPAroutesTeacher/pagenotfound.html",
        title: "404 | Page not found",
        data : "Page does not exists"
    },
    "/SPAroutesTeacher/index.jsp" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        title: "Home",
        data : "This is the home page"
    },

    "/" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Home_content.jsp",
        title: "Home",
        data : "This is the home page"
    },


    "/about" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/SPAroutesTeacher/about.html",
        title: "about",
        data : "This is the about page"
    },


    "/viewCourses" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/View_course2_left.jsp",
        path_right: "/views/View_course2_right.jsp",
        script: "../static/viewsJS/view_courses1.js",
        title: "My Courses",
        data : "This is the contact page"
    },

    "/create_course" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Create_course_left.jsp",
        path_right: "/views/Create_course_right.jsp",
        script: "../static/viewsJS/create_course.js",
        title: "Create Course",
        data : "This is the create course page"
    },

    "/question" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        script: "../static/viewsJS/question1.js",
        title: "Question",
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
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/publish_question_left.jsp",
        path_right: "/views/publish_question_right.jsp",
        title: "Publish Question",
        data : "This is the Publish question page"
    },

    "/profile" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Teahcer_profile.jsp",
        path_right: "",
        title: "profile",
        data : "This is the profile page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        path_right: "/views/Quiz_teacher_org1_right.jsp",
        script: "../static/viewsJS/view_quizzes.js",
        title: "Quizzes",
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

    "/start_quiz" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Start_quiz_left.jsp",
        path_right: "/views/Start_quiz_right.jsp",
        title: "Start Quiz",
        data : "This is the start quiz page"
    },

    "/cart" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/1_item_in_cart.jsp",
        path_right: "",
        title: "Cart",
        data : "This is the cart page"
    },

    "/notification" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Notification.jsp",
        path_right: "",
        title: "Notification",
        data : "This is the notification page"
    }


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
        document.querySelector(".cont-body-content").innerHTML = html_cont_left;
    }
    else{
        //fetching the right hand side content as well
        let html_cont_right = await fetch(route.path_right).then((response)=>
            response.text()
        );

        renderLeft();
        // document.querySelector(".cont-body-right").innerHTML = html_cont_right;



    }


   //changing the page name
    document.querySelector(".pagename").innerText = route.title;

};

urlLocation();