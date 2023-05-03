class Ad_section_list extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;


        this.innerHTML = `

        
                <!-- Full-width images with number and caption text -->
                <div class="mySlides fade">
                    <img src="${img_src}" style="width:100%">
                    <div class="text"></div>
                </div>
                <!-- Next and previous buttons -->
                

        `;





    }
}

customElements.define('ad-sectionlist', Ad_section_list);