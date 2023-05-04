class Teacher_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let gender = this.attributes.gender.value;
        let user_id = this.attributes.user_id.value;
        let tag = this.attributes.tag.value;

        this.innerHTML = `
        <a class="all_courses fnt fnt-bold fnt-mid" href="/teacher_published_course"><button class="btn btn-outlined btn-large is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My courses</button></a>
        <a class="all_quizzes fnt fnt-bold fnt-mid" href="/teacher_published_quiz"><button class="btn btn-outlined btn-large is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My quizess</button></a>
        <a class="all_quizzes fnt fnt-bold fnt-mid" href="/teacher_organizations"><button class="btn btn-outlined btn-large is-a-route fnt fnt-mid fnt-bold btn-a" id="${user_id}">My organizations</button></a>
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-mid">${name} <span class="material-icons-outlined"> ${gender}</span></h4>
            <p class="fnt fnt-mid">${quli}</p><br>
            <p class="fnt fnt-bold fnt-mid">Tag: ${tag}</p>
            
        </div>
        <div class="edit-and-delte-btns">
            <button class="btn btn-solid fnt fnt-bold fnt-mid"><a href="/edit_profileTeacher" >Edit Profile</a></button>
            <button id="delete-profile" class="btn btn-solid fnt fnt-bold fnt-mid">Delete Profile</button>
        </div>

    </div>
        `;


    }
}
    
customElements.define('teacherprofile-card', Teacher_profile_card);