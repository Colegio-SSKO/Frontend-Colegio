class Without_title extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        this.innerHTML = `
        <div class="profilepic-card">
        <div class="pic-container">
            <img src="${img_src}" alt="profile picture" srcset="">
           
        </div>
        <div class="name-container">
            <h5>${name}</h5>
        </div>
    </div>
        `;
    }
}
    
customElements.define('without-title', Without_title);