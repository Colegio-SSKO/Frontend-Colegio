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
        template : "/frontendcol_war_exploded/SPAroutes/index_single.jsp",
        path_left:"/frontendcol_war_exploded/SPAroutes/pagenotfound.html",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        isSingle : true,
        template : "/frontendcol_war_exploded/SPAroutes/index_single.jsp",
        path_left:"/frontendcol_war_exploded/views/Home_content.jsp",
        title: "Home",
        data : "This is the home page"
    },


    "/about" : {
        isSingle : false,
        template : "/frontendcol_war_exploded/SPAroutes/index_double.jsp",
        path_left:"/frontendcol_war_exploded/SPAroutes/about.html",
        title: "about",
        data : "This is the about page"
    },


    "/contact" : {
        isSingle : false,
        template : "/frontendcol_war_exploded/SPAroutes/index_double.jsp",
        path_left:"/frontendcol_war_exploded/SPAroutes/contact.html",
        title: "contact",
        data : "This is the contact page"
    },

    "/question" : {
        isSingle : false,
        template : "/frontendcol_war_exploded/SPAroutes/index_double.jsp",
        path_left:"/frontendcol_war_exploded/views/Question_student_1_left.jsp",
        path_right: "/frontendcol_war_exploded/views/Question_student_1_right.jsp",
        title: "contact",
        data : "This is the contact page"
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