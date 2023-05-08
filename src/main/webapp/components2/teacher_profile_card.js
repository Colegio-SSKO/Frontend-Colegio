class Teacher_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let gender = this.attributes.gender.value;
        let user_id = this.attributes.user_id.value;
        let tag = this.attributes.tag.value;

        this.innerHTML = `
        <a class="all_courses fnt fnt-bold fnt-mid" href="/teacher_published_course"><button class="btn btn-solid btn-a is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My courses</button></a>
        <a class="all_quizzes fnt fnt-bold fnt-mid" href="/teacher_published_quiz"><button class="btn  btn-solid btn-a is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My quizess</button></a>
        <a class="all_quizzes fnt fnt-bold fnt-mid" href="/teacher_organizations"><button class="btn  btn-solid btn-a is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My organizations</button></a>
        
        
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">Name: <span class="fnt-mid fnt-bold fnt">${name}</span></h4><br>
            <p class="fnt fnt-large fnt-bold">Gender: <span class="fnt-mid fnt-bold fnt">${gender}</span></p><br>
            <p class="fnt fnt-large fnt-bold">Qualification level: <span class="fnt-mid fnt-bold fnt">${quli}</span></p><br>
            <p class="fnt fnt-bold fnt-large">Tag: <span class="fnt-mid fnt-bold fnt">${tag}</span></p>
            
        </div>
        <div class="edit-and-delte-btns">
            <a href="/edit_profileTeacher" ><button class="btn-profile is-a-route fnt fnt-bold fnt-mid">Edit Profile</button></a>
        </div>

    </div>
        `;


    }
}
    
customElements.define('teacherprofile-card', Teacher_profile_card);