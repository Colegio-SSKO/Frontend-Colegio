class Chat_list_item extends HTMLElement {
    connectedCallback() {

        let chat_id = this.attributes.chat_id.value;
        let chatname = this.attributes.chatname.value;

        this.innerHTML = `

            <div id="${chat_id}"> ${chatname}</div>


        `;
    }
}

customElements.define('chat-listitem', Chat_list_item);