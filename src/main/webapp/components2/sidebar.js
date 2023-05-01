class sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar1">

        <a href=""><img src="../static/img/components_images/COllegio.png" alt="logo"></a>
        <div class="side_icons">
            <label> <a class="fnt fnt-bold fnt-mid" href="/">Home</a></label>
        </div>

        <div class="side_icons">
            <label> <a class="fnt fnt-bold fnt-mid" href="/viewCourses">My Courses</a></label>
        </div>

        <div class="side_icons">
            <label> <a class="fnt fnt-bold fnt-mid" href="/quizzes">My Quizzes</a></label>
        </div>

        <div class="side_icons">
            <label> <a class="fnt fnt-bold fnt-mid" href="/question">My Questions</a></label>
        </div>

         <div class="side_icons">
            <label><a class="fnt fnt-bold fnt-mid" href="/profile">Profile</a></label>
        </div>

        <div class="side_icons">
            <label><a class="fnt fnt-bold fnt-mid" href="/organization">Organization</a></label>
        </div>

        <div class="side_icons" id="js-logout-btn">
            <label class="fnt fnt-bold fnt-mid">Logout</label>
        </div>
        

        
        
    </div>
        `;

        let logoutBtn = document.querySelector("#js-logout-btn");
        logoutBtn.addEventListener('click', async ()=>{
            alert("logout");
            let logoutResponse = await fetch('http://localhost:8090/api/authenticate/logout/', {
                credentials: 'include'
            })
                .then((response)=>{
                    return response.json();
                })
            alert(logoutResponse["isSuccess"]);
            if (logoutResponse["isSuccess"]){
                //sending to home page
                window.history.pushState({}, "", "/");
                urlLocation();
            }
            else{
                alert("logout error");
            }

        })
    }
}

customElements.define('side-bar', sidebar);