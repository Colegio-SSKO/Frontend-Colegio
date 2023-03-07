class Featured_cont extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let description2 = this.attributes.description2.value;
        let price = this.attributes.price.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        this.innerHTML = `
        <div class="featured-cont-wrap">
        <div class="featured-cont-image">
            <img src="${img_src}" alt="">
        </div>
        <div class="featured-cont-details">
            <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
            <p class="fnt fnt-bold fnt-mid">${description}</p>
            <h6 class="fnt fnt-bold fnt-small">${author}</h6>
            <h6 class="fnt fnt-small">${description2}</h6>

            <ratings-content rating="${rating}" votes="${votes}"/>

            <h3 class="fnt fnt-bold fnt-extraLarge">${price}</h3>

            <div class="featured-cont-actions">
                <button class="btn btn-solid btn-large" id="addtocart">Add to cart</button>
                <button class="btn btn-solid btn-large">Buy Now</button>
            </div>

        </div>
    </div>
        `;
    }
}
    
customElements.define('featured-cont', Featured_cont);