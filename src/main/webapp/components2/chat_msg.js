class Chat_msg extends HTMLElement {
    connectedCallback() {

        let msg = this.attributes.msg.value;
        let type = this.attributes.type.value;

        this.innerHTML = `

                    <div class="open-question-msg ${type}"><p>${msg}</p>
                <br>

        `;
    }
}

customElements.define('chat-msg', Chat_msg);