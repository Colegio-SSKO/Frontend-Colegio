class navbar_normaluser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <nav>
                    <h3 class="pagename fnt fnt-bold fnt-extraLarge">Home</h3>
                    
                    <div class="nav-middle">
                        <input type="text" id="main_search_icon" class="fnt fnt-bold" placeholder="Search here ...">
                        <a href="/test"><img class="is-a-route" src="../static/img/components_images/search_icon.svg" alt=""></a>
                    </div>
            
                    <div class="main-profile router">
                        <a href="/auth/signin"><button class="btn btn-outlined  is-a-route">Sign in</button><a>
                    
                         <button class="btn btn-outlined">Sign Up</button>
                   
                    </div>
                    
                </nav>
        `;
    }
}

customElements.define('navbar-normaluser', navbar_normaluser);