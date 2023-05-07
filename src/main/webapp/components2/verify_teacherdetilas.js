class verify_teacherdetails extends HTMLElement {
    connectedCallback() {
        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);
        // alert(data);
        let name = this.attributes.name.value;
        let gender = this.attributes.gender.value;
        let email = this.attributes.email.value;
        let education_level = this.attributes.education_level.value;
        let refer = this.attributes.refer.value;
        let img_src = this.attributes.img_src.value;
        let user_id = this.attributes.user_id.value;
        let upgrade_id = this.attributes.upgrade_id.value;


        this.innerHTML = `
            <div class="report-cont-wrap">
                <div class="report-cont-details">
                    <center><u><h3 class="fnt fnt-bold fnt-large">Details of teacher verification</h3></u></center><br>
                    <h3 class="fnt fnt-bold fnt-mid">User Name:- ${name}</h3>
                    <h3 class="fnt fnt-bold fnt-mid">Email:- ${email}</h3>
                    <h3 class="fnt fnt-bold fnt-mid">Education_level:- ${education_level}</h3><br>
                    <h3 class="fnt fnt-bold fnt-mid">References:- ${refer}</h3><br>
                    <h3 class="fnt fnt-bold fnt-mid">Certificate</h3><br>
                    <img src="${img_src}">
                </div>
                
                <div class="report_button">
                    <button class="accept btn btn-solid btn-large" id="${user_id}">Accept</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="reject btn btn-solid btn-large" id="${user_id}">Reject</button>
                    <button class="pending btn btn-solid btn-large" id="${user_id}">Pending</button>
                </div>
                
            </div>
`;

        let pending = this.querySelector('.pending');
        pending.addEventListener('click', () => {
            // Call window.history.back() to go back to the previous page
            window.history.back();
        });


        let reject = document.querySelectorAll(".reject");


        for (let element of reject){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;


                let requestBody= {
                    "user_id": user_id,
                    "upgrade_id":upgrade_id
                }
                let url = "http://localhost:8090/api/moderators/delete_teacher_verify/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                window.history.back();
            })
        }





        let accept = document.querySelectorAll(".accept");


        for (let element of accept){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;


                let requestBody= {
                    "user_id": user_id,
                    "upgrade_id":upgrade_id,
                    "gender":gender,
                    "education_level":education_level
                }
                let url = "http://localhost:8090/api/moderators/accept_teacher_verify/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                window.history.back();
            })
        }
    }
}

customElements.define('verify-teacherdetails', verify_teacherdetails);