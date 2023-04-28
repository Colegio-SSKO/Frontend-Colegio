class sidebar_teacher extends HTMLElement {
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
            <label> <a class="fnt fnt-bold fnt-mid" href="/question">Answer Questions</a></label>
        </div>

         <div class="side_icons">
            <label><a class="fnt fnt-bold fnt-mid" href="/profile">Profile</a></label>
        </div>

        <div class="side_icons">
            <label><a class="fnt fnt-bold fnt-mid" href="/organization">Organization</a></label>
        </div>

        <div class="side_icons">
            <label ><a class="fnt fnt-bold fnt-mid" href="">Logout</a></label>
        </div>
        

        
        
    </div>
        `;
    }
}

customElements.define('sidebar-teacher', sidebar_teacher);