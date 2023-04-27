class Reportpop_up extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
            
        <div class="popup-container">
            <div class="blur-background"></div>
            <div class="popup-content">
                  <label for="reson">Enter the reason:</label>
                  <input type="text" id="reason" name="reason"><br><br>
                  <button class="submit" id="50">Sumbit</button>
            </div>
        </div>
            
        `;


        let report = document.querySelectorAll(".submit");


        for (let element of report){
            element.addEventListener('click',async (event)=>{

                let reason = document.getElementById("reason");
                let report_reason = reason.value;

                let course_id = event.target.id;


                let requestBody= {
                    "reason": report_reason,
                    "course_id": course_id
                }
                let url = "http://localhost:8090/api/users/report_course/:" + getUserID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${res.message}</h2>
                        <button btn btn-primary><a href="/viewCourses">OK</a></button>

                `;
            })
        }
    }
}

customElements.define('reportpop-up', Reportpop_up);