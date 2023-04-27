class Teacher_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let gender = this.attributes.gender.value;
        let user_id = this.attributes.user_id.value;

        this.innerHTML = `
        <button class="btn btn-outlined btn-large"><a class="all_courses fnt fnt-bold fnt-mid" id="${user_id}" href="/teacher_published_course">My courses</a></button>
        <button class="btn btn-outlined btn-large"><a class="all_quizzes fnt fnt-bold fnt-mid" id="${user_id}" href="/teacher_published_quiz">My quizess</a></button>
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-mid">${name} <span class="material-icons-outlined"> ${gender}</span></h4>
            <p class="fnt fnt-mid">${quli}</p>
            
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