class notification_msg extends HTMLElement {
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
                    ${message}
                  </div>
                </div>
            </div>
        `;
    }
}

customElements.define('notification-0message', notification_msg);