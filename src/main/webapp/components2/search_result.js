class search_result extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let teacher_id = this.attributes.teacher_id.value;
        let status = this.attributes.status.value;

        this.innerHTML = `
            <div class="result-notification">
                <div class="result-prof-img">
                    <img src="${img_src}" alt="">
                </div>
                <div class="result-details">
                    <h3 class="fnt fnt-bold fnt-mid">${name}</h3>
                    <h3 class="fnt fnt-bold fnt-small">${quli}</h3>
                </div>

                <div style="text-align: right" class="send_request">
                    <button class="request-button" id="${teacher_id}" ${status === "1" ? "disabled" : ""}>send</button>
                </div>
            </div>
        `;




        let send_request = document.querySelectorAll(".request-button");


        for (let element of send_request){
            element.addEventListener('click',async (event)=>{

                let teacher_id = event.target.id;


                let requestBody= {
                    "teacher_id": teacher_id
                }
                alert(teacher_id);
                let url = "http://localhost:8090/api/organizations/org_send_request/:" + getUserID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                alert(res.message);
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                alert(res.message);

                if(res.message==="Send request successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn btn-a" id="ok-btn">OK</button>       
                `;
                }
                else{
                    popup.innerHTML = `
                       <img src="../static/img/components_images/error.jpg" alt="">
                       <h2>${res.message}</h2>
                       <button class="btn" id="ok-btn">OK</button>       
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

customElements.define('search-result', search_result);