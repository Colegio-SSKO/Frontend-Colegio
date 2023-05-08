class navbar_normaluser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         
                
                <nav>
                    <div class="normal-user-navbar-left">
                      <span class="normal-user-pagename pagename fnt fnt-bold fnt-extraLarge">title</span>
                    </div>
                    <div class="normal-user-navbar-middle">
                      <form class="normal-user-search-form">
                        <input type="text" id="main_search_icon" class="fnt-bold fnt fnt-mid" placeholder="Search...">
                        <a href="/test"><button class="normal-user-is-a-route is-a-route fnt-mid fnt fnt-bold" >Search</button></a>
                      </form>
                    </div>
                    <div class="normal-user-main-profile router main-profile normal-user-navbar-right">
                     <a href="/auth/signin"><button class="normal-user-is-a-route is-a-route fnt-mid fnt fnt-bold">Sign In</button></a>
                     <a href="/auth/signup"><button class="normal-user-is-a-route is-a-route fnt-mid fnt fnt-bold">Sign Up</button></a>
                    </div>
              </nav>
        `;
    }
}

customElements.define('navbar-normaluser', navbar_normaluser);