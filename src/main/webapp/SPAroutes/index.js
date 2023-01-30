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
        path:"/frontendcol_war_exploded/SPAroutes/pagenotfound.html",
        title: "404 | Page not found",
        data : "Page does not exists"
    },

    "/" : {
        path:"/frontendcol_war_exploded/SPAroutes/home.html",
        title: "Home",
        data : "This is the home page"
    },


    "/about" : {
        path:"/frontendcol_war_exploded/SPAroutes/about.html",
        title: "about",
        data : "This is the about page"
    },


    "/contact" : {
        path:"/frontendcol_war_exploded/SPAroutes/contact.html",
        title: "contact",
        data : "This is the contact page"
    },

    "/question" : {
        path:"/frontendcol_war_exploded/views/Question/html_template.jsp",
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
    if (location.length==0){
        location = "/";
    }

    console.log(location);
    const route = Routes[location] || Routes[404];
    let html_cont = await fetch(route.path).then((response)=>
        response.text()
    );

    document.querySelector(".cont-body-left").innerHTML = html_cont;
    document.querySelector(".pagename").innerText = route.title;

};

urlLocation();