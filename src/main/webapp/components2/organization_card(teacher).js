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
        

        <h3 class="teacher_send_request fnt-mid fnt-light link" id="${organization_id}">${status== 1 ? '' : 'Send Request>>'}</h3>

        </div>
        `;



        let teacher_send_request = document.querySelectorAll(".teacher_send_request");


        for (let element of teacher_send_request){
            element.addEventListener('click',async (event)=>{

                let organization_id = event.target.id;

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                      <h2 class="fnt fnt-bold fnt-large">Confirm send request</h2>
                      
                      <div style="display: inline-block">
                            <button class="ok-btn btn btn-large fnt fnt-large fnt-bold" style="margin-right: 10px;" >OK</button><button class="btn btn-large fnt fnt-large fnt-bold" id="cancel-btn" style="background-color: darkred">Cancel</button>      
                      </div>
`;



                let ok = document.querySelectorAll(".ok-btn");

                for (let element of ok){
                    element.addEventListener('click',async (event)=>{




                        let requestBody= {
                            "organization_id": organization_id
                        }
                        let url = "http://localhost:8090/api/teachers/teacher_send_req_org/:" + getUserID();
                        let res = await fetch(url, {
                            method : "POST",
                            body : JSON.stringify(requestBody),
                            credentials : "include"
                        }).then((response)=>
                            response.json()

                        );





                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        if(res.message==="Send request successfully"){
                            popup.innerHTML = `
                                  <img src="../static/img/components_images/success.jpg" alt="">
                                  <h2>${res.message}</h2>
                                  <button class="btn is-a-route" id="ok-btn">OK</button>      
                            `;

                            let ok_btn = document.getElementById("ok-btn");
                            ok_btn.addEventListener("click", ()=>{
                                let location = window.location;
                                window.history.pushState({}, "", location);
                                urlLocation();
                            })
                        }
                        else{
                            popup.innerHTML = `
                               <img src="../static/img/components_images/error.jpg" alt="">
                               <h2>Error</h2>
                               <button class="btn is-a-route" id="ok-btn">OK</button>      
                        `;
                            let ok_btn = document.getElementById("ok-btn");
                            ok_btn.addEventListener("click", ()=>{
                                let location = window.location;
                                window.history.pushState({}, "", location);
                                urlLocation();
                            })

                        }

                        let ok_btn = document.getElementById("ok-btn");
                        ok_btn.addEventListener("click", ()=>{
                            document.querySelector(".popup-container").style.display = "none";
                        })

                    })

                    let cancel_btn = document.getElementById("cancel-btn");
                    cancel_btn.addEventListener("click", ()=>{
                        document.querySelector(".popup-container").style.display = "none";
                    })







                }


            })
        }
    }
}

customElements.define('organization-cardteacher', Organization_cardteacher);