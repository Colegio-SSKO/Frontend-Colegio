class Hero extends HTMLElement {
    async connectedCallback() {
        let data = await fetch("http://localhost:8090/api/users/view_featured_cont", {
            method: 'GET',
            credentials: "include"
        }).then(
            (res) => {
                return res.json();
            }
        )

        let content_id = 20;
        let content_name = "title1"


        this.innerHTML = `
                <div class="hero-container">
                    <div class="hero-header fnt fnt-hero fnt-bold">Unlock your potential with us<span class="hero-text "><p class="fnt-extraLarge fnt-bold">Your one-stop destination for lifelong learning.</p></span></div>
                    <div class="hero-description"><img src="../static/img/components_images/home_img.png" alt=""></div>
                </div>
        `;


    }
}

customElements.define('home-hero', Hero);