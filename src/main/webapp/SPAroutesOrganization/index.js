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

    "/SPAroutesOrganization/index.jsp" : {
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
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/organization_courses.jsp",
        path_right: "",
        script: "../static/viewsJS/view_course_organization.js",
        title: "All Courses",
        data : "This is the organization_course page"
    },

    "/Org_teacher_courses" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Org_teacher_courses.jsp",
        path_right: "",
        script: "../static/viewsJS/view_course_organization.js",
        title: "All Courses",
        data : "This is the organization_course page"
    },


    "/question" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Organization_view.jsp",
        path_right: "",
        // script: "../static/viewsJS/question1.js",
        title: "Organizations",
        data : "This is the Organization page"
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
        path_left:"/views/Organization_profile.jsp",
        path_right: "",
        // script: "../static/viewsJS/Profile_test.js",
        title: "Profile",
        data : "This is the profile page"
    },

    "/Organization_profile(stu)" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Organization_profile(stu).jsp",
        path_right: "",
        // script: "../static/viewsJS/Profile_test.js",
        title: "Profile",
        data : "This is the profile page"
    },

    "/invite_teacher" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/InviteTeachers.jsp",
        path_right: "",
        // script: "../static/viewsJS/Profile_test.js",
        title: "Invite Teacher",
        data : "This is the Invite teacher page"
    },

    "/org_teacher" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Org_teacherlist_view.jsp",
        path_right: "",
        // script: "../static/viewsJS/Profile_test.js",
        title: "All Teachers",
        data : "This is the view all teachers page"
    },

    "/org_teacher(stu)" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/Org_teacherlist_view(stu).jsp",
        path_right: "",
        // script: "../static/viewsJS/Profile_test.js",
        title: "All Teachers",
        data : "This is the view all teachers page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutesTeacher/index_double.jsp",
        path_left:"/views/Quiz_teacher_org1_left.jsp",
        path_right: "/views/view_quiz_organization_right.jsp",
        script: "../static/viewsJS/view_quizzes_organization.js",
        title: "Quizzes",
        data : "This is the quiz page"
    },


    "/cart" : {
        isSingle : true,
        template : "/SPAroutesTeacher/index_single.jsp",
        path_left:"/views/view_cart.jsp",
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