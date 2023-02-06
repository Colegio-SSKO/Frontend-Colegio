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
        path_left:"/views/view_course_left.jsp",
        path_right: "/views/view_course_right.jsp",
        title: "My Courses",
        data : "This is the contact page"
    },

    "/question" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Question_student_1_left.jsp",
        path_right: "/views/Question_student_1_right.jsp",
        title: "Question",
        data : "This is the Question page"
    },

    "/profile" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
        path_left:"/views/Profile.jsp",
        path_right: "",
        title: "profile",
        data : "This is the profile page"
    },

    "/quizzes" : {
        isSingle : false,
        template : "/SPAroutes/index_double.jsp",
        path_left:"/views/Student_quiz_left.jsp",
        path_right: "/views/Student_quiz_right.jsp",
        title: "Quizzes",
        data : "This is the quiz page"
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
        path_left:"/views/1_item_in_cart.jsp",
        path_right: "",
        title: "Cart",
        data : "This is the cart page"
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

    "/notification" : {
        isSingle : true,
        template : "/SPAroutes/index_single.jsp",
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

    //setting the location to "/" if no path is empty
    if (location.length==0){
        location = "/";
    }

    const route = Routes[location] || Routes[404];

    //fetching the template
    let html_template = await fetch(route.template).then((response)=>
        response.text()
    );


    //rendering the appropriate template
    document.querySelector(".cont-body").innerHTML = html_template;




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
        document.querySelector(".cont-body-left").innerHTML = html_cont_left;
        document.querySelector(".cont-body-right").innerHTML = html_cont_right;



    }

   //changing the page name
    document.querySelector(".pagename").innerText = route.title;

};

urlLocation();