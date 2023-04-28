class navbar_normaluser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <nav>
                    <h3 class="pagename fnt fnt-bold fnt-extraLarge">Home</h3>
                    
                    <div class="nav-middle">
                        <input type="text" id="main_search_icon" class="fnt fnt-bold" placeholder="Search here ...">
                        <button class="btn btn-solid"><a href="/test">search</a></button>
                    </div>
            
                    <div class="main-profile router">
                        <a href="/auth/signin"><button class="btn btn-outlined btn-small is-a-route">Sign in</button><a>
                    
                         <button class="btn btn-outlined btn-small">Sign Up</button>
                   
                    </div>
                    
                </nav>
        `;
    }
}

customElements.define('navbar-normaluser', navbar_normaluser);