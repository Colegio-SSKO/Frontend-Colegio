class Small_listed extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let price = this.attributes.price.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        this.innerHTML = `
        <div class="small-listed-cont-wrap">
        <div class="small-listed-cont-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="small-listed-cont-details">
            <h5 class="fnt fnt-bold fnt-large">${title}</h5>

                <div class="small-listed-cont-author">
                    <h6 class="fnt fnt-bold fnt-small">${author}</h6>

                    <ratings-content rating="${rating}" votes="${votes}"/>
                </div>


            <h3 class="fnt fnt-bold fnt-extraLarge">${price}</h3>
        </div>
        
    </div>
        `;
    }
}
    
customElements.define('small-listed', Small_listed);