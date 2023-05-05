class Organization_cardteacher_withleave extends HTMLElement {
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
            <h5 class="fnt fnt-bold fnt-large"><a class="org_name" href="/Organization_profile(teacher)" style="text-decoration: none"  id="${organization_id}">${name}</a></h5>
            <h5 class="fnt fnt-bold fnt-mid">${address}</h5>
        </div><br><br>
        
        <h3 class="teacher_leave fnt-mid fnt-light" id="${organization_id}">Leave from the organization</h3>

        </div>
        `;



        let teacher_leave = document.querySelectorAll(".teacher_leave");


        for (let element of teacher_leave){
            element.addEventListener('click',async (event)=>{

                let organization_id = event.target.id;
                temporary_data= organization_id;


                let requestBody= {
                    "organization_id": organization_id
                }
                let url = "http://localhost:8090/api/teachers/leave_from_org/:" + getUserID();
                let res = await fetch(url, {
                    method : "POST",
                    body : JSON.stringify(requestBody),
                    credentials : "include"
                }).then((response)=>
                    response.json()

                );

                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();


                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Send request successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <a href="/organization"><button class="btn is-a-route" id="ok-btn">OK</button></a>       
                `;
                }
                else{
                    popup.innerHTML = `
                       <img src="../static/img/components_images/error.jpg" alt="">
                       <h2>Error</h2>
                       <a href="/organization"><button class="btn is-a-route" id="ok-btn">OK</button></a>       
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
            })
        }
    }
}

customElements.define('organization-cardteacherwithl', Organization_cardteacher_withleave);