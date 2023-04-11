class Pop_up extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
            
        <div class="popup-container">
            <div class="blur-background"></div>
            <div class="popup-content">
            </div>
        </div>
            
        `;
    }
}

customElements.define('pop-up', Pop_up);