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
                <button class="btn btn-solid btn-small"><a class="remove fnt fnt-bold fnt-small" href="" id="${teacher_id}">Delete</a></button>
            </div>
        </div>
        `;


        //remove request
        let remove = document.querySelectorAll(".remove");


        for (let element of remove){
            element.addEventListener('click',async (event)=>{

                let teacher_id = event.target.id;


                let requestBody= {
                    "teacher_id": teacher_id
                }
                let url = "http://localhost:8090/api/organizations/org_remove_teacher_req/:" + getOrgID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );
                alert("Teacher request removed");
                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();
            })
        }
    }
}

customElements.define('org-teacherrequest', org_teacherrequest);