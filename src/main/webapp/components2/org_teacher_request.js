class org_teacherrequest extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let teacher_id = this.attributes.teacher_id.value;
        let quli= this.attributes.quli.value;
        this.innerHTML = `
        <div class="noti-notification">
            <div class="noti-prof-img">
                <img src="${img_src}" alt="">
            </div>
            <div class="noti-msg">
                <h3 class="fnt fnt-bold fnt-mid">${name} send request to join your organization</h3>
                <h3 class="fnt fnt-bold fnt-mid">Qulification Level: ${quli}</h3>
                <button class="accept fnt fnt-bold fnt-small btn btn-solid btn-small" id="${teacher_id}">Accept</button>
                <button class="remove fnt fnt-bold fnt-small btn btn-solid btn-small" id="${teacher_id}">Delete</button>
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


                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Remove teacher request successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/notification">OK</a></button>       
                `;
                }
                else{
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button class="btn" id="ok-btn"><a href="/notification">OK</a></button>
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                alert(res.message);
                // alert("Teacher request removed");
                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();
            })
        }
    }
}

customElements.define('org-teacherrequest', org_teacherrequest);