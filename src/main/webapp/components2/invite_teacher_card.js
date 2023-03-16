class invite_teachercard extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;

        this.innerHTML = `
        <div class="noti-notification">
            <div class="noti-prof-img">
                <img src="${img_src}" alt="">
            </div>
            
            <div class="noti-msg">
                <h3 class="fnt fnt-bold fnt-mid">${name}</h3>
                <h3 class="fnt fnt-bold fnt-mid">${quli}</h3>
            </div>
        </div>
        `;
    }
}

customElements.define('invite_teachercard', invite_teachercard);