class Cart_item extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let description2 = this.attributes.description2.value;
        let price = this.attributes.price.value;
        this.innerHTML = `
        <div class="cart-item">
            <div class="tumbnail-img">
                <img src="${img_src}" alt="">
            </div>
    
            <div class="cart-item-content">
                <h2 class="fnt fnt-bold fnt-large">${title}</h2>
                <h3 class="fnt fnt-bold fnt-mid">${description}</h3>
                <p class="fnt fnt-bold fnt-small">${author} </p>
                <jsp:include page="ratings.jsp"/>
                <p class="fnt fnt-small">${description2}</p>
                
                <div class="featured-cont-actions">
                    <button class="btn btn-solid btn-large" id="addtocart">Keep shopping</button>
                </div>
            </div>
            
            
    
            <div class="cart-item-price">
                <h1 class="fnt fnt-bold fnt-extraLarge">${price}</h1>
                <button><a class="fnt fnt-bold fnt-mid" href="">Remove</a></button>
            </div>
            
            
    </div>
        `;
    }
}

customElements.define('cart-item', Cart_item);