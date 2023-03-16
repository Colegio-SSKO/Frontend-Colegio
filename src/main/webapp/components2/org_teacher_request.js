class org_teacherrequest extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let teacher_id = this.attributes.teacher_id.value;

        this.innerHTML = `
        <div class="noti-notification">
            <div class="noti-prof-img">
                <img src="${img_src}" alt="">
            </div>
            <div class="noti-msg">
                <h3 class="fnt fnt-bold fnt-mid">${name} send request to join your organization</h3>
                <button class="btn btn-solid btn-small"><a class="accept fnt fnt-bold fnt-small" href="" id="${teacher_id}">Accept</a></button>
                <button class="btn btn-solid btn-small"><a class="fnt fnt-bold fnt-small" href="">Delete</a></button>
            </div>
        </div>
        `;
    }
}

customElements.define('org-teacherrequest', org_teacherrequest);