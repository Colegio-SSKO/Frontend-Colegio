class sidebar_moderator extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar1">

    <a href=""><img src="../static/img/components_images/COllegio.png" alt="logo"></a>

    <div class="side_icons">
        <label><a class="fnt fnt-bold fnt-mid" href="/report_course">Reported Courses</a></label>
    </div>

    <div class="side_icons">
        <label><a class="fnt fnt-bold fnt-mid" href="/report_quiz">Reported quizzes</a></label>
    </div>

    <div class="side_icons">
        <label><a class="fnt fnt-bold fnt-mid" href="/report_person">Handle Users</a></label>
    </div>

    <div class="side_icons">
        <label><a class="fnt fnt-bold fnt-mid" href="/verify_teachers">Verify Teachers</a></label>
    </div>


    <div class="side_icons">
        <label ><a class="fnt fnt-bold fnt-mid" href="">Logout</a></label>
    </div>
        

        
        
    </div>
        `;

        let logoutBtn = document.querySelector("#js-logout-btn");
        logoutBtn.addEventListener('click', async ()=>{

            let logoutResponse = await fetch('http://localhost:8090/api/authenticate/logout/', {
                credentials: 'include'
            })
                .then((response)=>{
                    return response.json();
                })

            if (logoutResponse["isSuccess"]){
                closeWebsockets();

                //unloading chats

                document.querySelector('#js-chat-in-body-tag').innerHTML = ''

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

customElements.define('sidebar-moderator', sidebar_moderator);