class Organization_cardteacher extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let organization_id = this.attributes.organization_id.value;
        let status = this.attributes.status.value;
        this.innerHTML = `
        <div class="teacher-card-wrap">

        <div class="teacher-card-image">
            <img src="${img_src}" alt="course image"><br/>
        </div>


        <div class="teacher-card-details">
            <h5 class="fnt fnt-bold fnt-large"><a class="org_name fnt fnt-mid fnt-bold" href="/Organization_profile(stu)" style="text-decoration: none"  id="${organization_id}">${name}</a></h5>
            <h5 class="fnt fnt-bold fnt-mid">${address}</h5>
        </div><br><br>
        
        <h3 class="teacher_send_request fnt-mid fnt-light" id="${organization_id}"><button class="btn-solid btn-a btn fnt fnt-mid">${status== 1 ? '' : 'Send Request>>'}</button></h3>

        </div>
        `;
    }
}

customElements.define('organization-cardteacher', Organization_cardteacher);