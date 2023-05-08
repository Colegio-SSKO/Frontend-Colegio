class Comment_container extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let commenter = this.attributes.commenter.value;
        let date = this.attributes.date.value;
        let text = this.attributes.text.value;
        let user_id = this.attributes.user_id.value;


        this.innerHTML = `
         <div class="comment-container">
                <img class="comment-container-profile-pic " src="${img_src}" alt="Profile Picture">
           <div class="comment-container-comment-details">
              <div>
                    <h4 class="comment-container-commenter-name fnt-bold fnt fnt-mid">${commenter} &nbsp&nbsp&nbsp<span class="comment-container-comment-date">${date}</span></h4>
              </div>
              <div>
                    <p class="comment-container-comment-text fnt fnt-mid">${text}</p>
              </div>
              <div class="comment-container-comment-actions link fnt fnt-mid fnt-bold">
                    <div class="reportcomment" id="${user_id}">report</div>
              </div>
            </div>
      </div>
        `;

        let reportcomment = document.querySelectorAll(".reportcomment");


        for (let element of reportcomment){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                        <label for="reason" class="fnt fnt-large fnt-bold">Enter the reason:</label><br>
                        <input type="text" id="reason" name="reason" class="fnt fnt-large fnt-light" style="width: 300px; height: 30px;"><br><br>
                        <button class="submit btn btn-small">Sumbit</button>
                `;

                let report = document.querySelectorAll(".submit");


                for (let element of report){
                    element.addEventListener('click',async (event)=>{

                        let reason = document.getElementById("reason");
                        let report_reason = reason.value;


                        let requestBody= {
                            "reason": report_reason,
                            "user_id": user_id
                        }
                        let url = "http://localhost:8090/api/users/report_comment/:" + getUserID();
                        let res = await fetch(url, {method : "POST",  credentials:"include",body : JSON.stringify(requestBody)}).then((response)=>
                            response.json()

                        );
                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Report update successfully</h2><br>
                        <a href="/"><div class="btn btn-small btn-outlined is-a-route fnt fnt-bold fnt-large">OK</div></a>

                `;

                    })
                }

            })
        }

    }
}

customElements.define('comment-container', Comment_container);