class Notification_msg extends HTMLElement {
    connectedCallback() {

        let date = this.attributes.date.value;
        let time = this.attributes.time.value;
        let title = this.attributes.title.value;
        let sender = this.attributes.sender.value;
        let message = this.attributes.message.value;
        let id = this.attributes.id.value;
        this.innerHTML = `
            <div class="notifications-container">
        <div class="notification" id="${id}">
          <div class="notification-header">
            <span class="notification-date">${date}</span>
            <span class="notification-time">${time}</span>
            <h3 class="notification-title">${title}</h3>
            <span class="notification-sender">${sender}</span>
          </div>
          <div class="notification-message">
            ${message}
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define('notification-message', Notification_msg);