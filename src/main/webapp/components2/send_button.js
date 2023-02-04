class Send_button extends HTMLElement {
    connectedCallback() {
      
        this.innerHTML = `
        <button class="send-button" type="submit"><span class="material-icons">send</span></button>
        `;
    }
}
    
customElements.define('send-button', Send_button);