class Teacher_cardorg extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let user_id= this.attributes.user_id.value;
        let teacher_id= this.attributes.teacher_id.value;
        this.innerHTML = `
        <div class="teacher-card-wrap">

            <div class="teacher-card-image">
                <img src="${img_src}" alt="course image"><br/>
            </div>
        
        
            <div class="teacher-card-details">
                <h5 class="fnt fnt-bold fnt-large"><a class="teacher_cont" href="/teacher_course" style="text-decoration: none" id="${user_id}">${name}</a></h5>
                <h5 class="fnt fnt-bold fnt-mid">${quli}</h5>
            </div>
        
            <h3 class="remove_teacher fnt-mid fnt-light" id="${teacher_id}">Remove</h3>
        </div>
        `;
    }
}

customElements.define('teacher-cardorg', Teacher_cardorg);