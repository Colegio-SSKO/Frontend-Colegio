class noti_3msg extends HTMLElement {
    connectedCallback() {

        let date = this.attributes.date.value;
        let time = this.attributes.time.value;
        let img_src = this.attributes.img_src.value;
        let sender_name = this.attributes.sender_name.value;
        let message = this.attributes.message.value;
        let id = this.attributes.id.value;
        let notification_id = this.attributes.notification_id.value;
        this.innerHTML = `
            <div class="notifications-container">
        <div class="notification" id="${id}">
            <div class="noti-prof-img">
                <img src="${img_src}" alt="">
            </div>
            
            <div class="notification-header">
                <span class="notification-date">${date}</span>
                <span class="notification-time">${time}</span>
            </div>
          <div class="notification-message">
                ${message}<br>
                <div class="notification buttons">
                    <div class="accept btn btn-outlined btn-small" id="${notification_id}">Accept</div>
                    <div class="delete btn btn-outlined btn-small" id="${notification_id}">Delete</div>
                </div> 
          </div>
        </div>
      </div>
        `;



        let accept = document.querySelectorAll(".accept");


        for (let element of accept){
            element.addEventListener('click',async (event)=>{

                let notification_id = event.target.id;


                let requestBody= {
                    "notification_id": notification_id,
                    "sender_userid": id
                }
                let url = "http://localhost:8090/api/teachers/teacher_accept_org/:" + getUserID();

                let res = await fetch(url, {
                    method : "POST",
                    body : JSON.stringify(requestBody),
                    credentials : "include"
                }).then((response)=>
                    response.json()

                );
                alert("API eka cl klaa")
                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();
            })
        }





        let deleteteacher = document.querySelectorAll(".delete");


        for (let element of deleteteacher){
            element.addEventListener('click',async (event)=>{

                let notification_id = event.target.id;


                let requestBody= {
                    "notification_id": notification_id,
                    "sender_userid": id
                }
                let url = "http://localhost:8090/api/teachers/teacher_delete_org_request/:" + getUserID();

                let res = await fetch(url, {
                    method : "POST",
                    body : JSON.stringify(requestBody),
                    credentials : "include"
                }).then((response)=>
                    response.json()

                );
                alert("API eka cl klaa")
                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();
            })
        }
    }
}

customElements.define('notification-message3', noti_3msg);