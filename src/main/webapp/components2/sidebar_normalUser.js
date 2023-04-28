class sidebar_normaluser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <div class="sidebar1">

        <a href=""><img src="../static/img/components_images/COllegio.png" alt="logo"></a>
        <div class="side_icons">
            <label> <a class="fnt fnt-bold fnt-mid" href="/">Home</a></label>
        </div>


    </div>
        `;
    }
}

customElements.define('sidebar-normaluser', sidebar_normaluser);