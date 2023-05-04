class noti_6msg extends HTMLElement {
    connectedCallback() {

        let date = this.attributes.date.value;
        let time = this.attributes.time.value;
        let img_src = this.attributes.img_src.value;
        let sender_name = this.attributes.sender_name.value;
        let message = this.attributes.message.value;
        let id = this.attributes.id.value;
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
                    <div class="btn btn-outlined btn-small">Accept</div>
                    <div class="btn btn-outlined btn-small">Delete</div>
                </div> 
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define('notification-message6', noti_6msg);