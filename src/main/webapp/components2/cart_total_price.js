class cart_price extends HTMLElement {
    connectedCallback() {
        let price = this.attributes.price.value;

        this.innerHTML = `
        <div class="cart-price-wrap">
      
            <div class="small-listed-cont-details">
                <div class="fnt fnt-bold fnt-extraLarge">Total: LKR.${price}</div>
                <div style="text-align: center"><button class="btn btn-solid btn-small">Checkout</button></div> 
            </div>
        
        </div>
        `;
    }
}
    
customElements.define('cart-price', cart_price);