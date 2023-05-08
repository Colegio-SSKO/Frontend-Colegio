class Teacher_cardorg extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let user_id= this.attributes.user_id.value;
        let teacher_id2= this.attributes.teacher_id2.value;
        this.innerHTML = `
        <div class="teacher-card-wrap">

            <div class="teacher-card-image">
                <img src="${img_src}" alt="course image"><br/>
            </div>
        
        
            <div class="teacher-card-details">
                <h5 class="fnt fnt-bold fnt-large"><a class="teacher_cont" href="/teacher_course" style="text-decoration: none" id="${user_id}">${name}</a></h5>
                <h5 class="fnt fnt-bold fnt-mid">${quli}</h5>
            </div>
        
            <h3 class="remove_teacher fnt-mid fnt-light">Remove</h3>
        </div>
        `;



        let remove = document.querySelectorAll(".remove_teacher");


        for (let element of remove){
            element.addEventListener('click',async (event)=>{

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                      <h2 class="fnt fnt-bold fnt-large">Confirm remove teacher</h2>
                      
                      <div style="display: inline-block">
                            <button class="ok-btn btn btn-large fnt fnt-large fnt-bold" id="${teacher_id2}" style="margin-right: 10px;" >OK</button><button class="btn btn-large fnt fnt-large fnt-bold" id="cancel-btn" style="background-color: darkred">Cancel</button>      
                      </div>
`;



                let ok = document.querySelectorAll(".ok-btn");

                for (let element of ok){
                    element.addEventListener('click',async (event)=>{

                        let teacher_id = event.target.id;


                        let requestBody= {
                            "teacher_id": teacher_id
                        }
                        let url = "http://localhost:8090/api/organizations/remove_teacher/:" + getUserID();
                        let res = await fetch(url, {
                            method : "POST",
                            body : JSON.stringify(requestBody),
                            credentials : "include"
                        }).then((response)=>
                            response.json()

                        );




                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        if(res.message==="Remove teacher successfully"){
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

customElements.define('teacher-cardorg', Teacher_cardorg);