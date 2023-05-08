class Teacher_profile_carduser extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let gender = this.attributes.gender.value;
        let user_id = this.attributes.user_id.value;

        this.innerHTML = `
        <button class="btn btn-outlined btn-large"><a class="all_courses fnt fnt-bold fnt-mid" id="${user_id}" href="">Published courses</a></button>
        <button class="btn btn-outlined btn-large"><a class="all_quizzes fnt fnt-bold fnt-mid" id="${user_id}" href="">Published quizess</a></button>
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">Name: <span class="fnt-mid fnt-bold fnt">${name}</span></h4>
            <p class="fnt fnt-large fnt-bold">Gender: <span class="fnt-mid fnt-bold fnt">${gender}</span></p>
            <p class="fnt fnt-large fnt-bold">Qualification Level: <span class="fnt-mid fnt-bold fnt">${quli}</span></p>
            
        </div>
   
    </div>
        `;


    }
}
    
customElements.define('teacherprofile-carduser', Teacher_profile_carduser);