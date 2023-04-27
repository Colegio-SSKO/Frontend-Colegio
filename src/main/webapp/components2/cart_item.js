class Cart_item extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let description2 = this.attributes.description2.value;
        let price = this.attributes.price.value;
        let content_id = this.attributes.content_id.value;
        this.innerHTML = `
        <div class="cart-item">
            <div class="cart-tumbnail-img">
                <img src="${img_src}" alt="">
            </div>
    
            <div class="cart-item-content">
                <div class="cart-text">
                    <h2 class="fnt fnt-bold fnt-large">${title}</h2>
                    <h3 class="fnt fnt-bold fnt-mid">${description}</h3>
                    <p class="fnt fnt-bold fnt-small">${author} </p>
                    <jsp:include page="ratings.jsp"/>
                    <p class="fnt fnt-small">${description2}</p>
                </div>
            </div>  
            
            <div class="cart-item-price">
                    <h1 class="fnt fnt-bold fnt-extraLarge">${price}</h1>
                    <button><a class="remove_cart fnt fnt-bold fnt-mid" href="" id="${content_id}">Remove</a></button>
            </div>
        </div>
        `;
    }
}

customElements.define('cart-item', Cart_item);