class Chat_list_item extends HTMLElement {
    connectedCallback() {

        let question_id = this.attributes.question_id.value;
        let chatname = this.attributes.chatname.value;
        let img_src = this.attributes.img_src.value;

        this.innerHTML = `

            <div id="${question_id}" class="chat-list-item fnt-bold fnt fnt-mid"> <img src="${img_src}" alt=""> ${chatname}</div>


        `;
    }
}

customElements.define('chat-listitem', Chat_list_item);