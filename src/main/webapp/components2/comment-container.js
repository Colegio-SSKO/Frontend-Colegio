class Comment_container extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let commenter = this.attributes.commenter.value;
        let date = this.attributes.date.value;
        let text = this.attributes.text.value;
        let user_id = this.attributes.user_id.value;


        this.innerHTML = `
         <div class="comment-container">
        <img class="comment-container-profile-pic" src="${img_src}" alt="Profile Picture">
        <div class="comment-container-comment-details">
          <h4 class="comment-container-commenter-name">
            <span class="comment-container-comment-date">${date}</span>
            ${commenter}
          </h4>
          <p class="comment-container-comment-text">${text}</p>
          <div class="comment-container-comment-actions">
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
                        <label for="reason">Enter the reason:</label>
                        <input type="text" id="reason" name="reason"><br><br>
                        <button class="submit">Sumbit</button>
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
                        let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                            response.json()

                        );
                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${res.message}</h2>
                        <button btn btn-primary><a href="/">OK</a></button>

                `;
                    })
                }

            })
        }

    }
}

customElements.define('comment-container', Comment_container);