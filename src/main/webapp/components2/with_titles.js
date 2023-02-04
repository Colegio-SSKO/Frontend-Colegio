class With_title extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let qulifi = this.attributes.qulifi.value;
        this.innerHTML = `
        <div class="profilepic-card">
            <div class="pic-container">
                 <img src="${img_src}" alt="profile picture" srcset="">
           
            </div>
            <div class="name-container">
                <h5>${name}</h5>
                <h6>${qulifi}</h6>
            </div>
        </div>

        `;
    }
}
    
customElements.define('with-title', With_title);









