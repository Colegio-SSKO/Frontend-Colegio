class Hero extends HTMLElement {
    async connectedCallback() {

        this.innerHTML = `
                <div class="hero-container">
                    <div class="hero-header fnt fnt-hero fnt-bold">Unlock your potential with us<span class="hero-text "><p class="fnt-extraLarge fnt-bold">Your one-stop destination for lifelong learning.</p></span></div>
                    <div class="hero-description"><img src="../static/img/components_images/home_img.png" alt=""></div>
                </div>
        `;


    }
}

customElements.define('home-hero', Hero);