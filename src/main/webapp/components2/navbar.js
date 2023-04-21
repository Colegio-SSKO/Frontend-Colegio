class Navbar extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
    <nav>

        <h3 class="pagename fnt fnt-bold fnt-extraLarge">Notifications</h3>
        
        <div class="nav-middle">
            <input type="text" id="main_search_icon" class="fnt fnt-bold" placeholder="Search here ...">
            <button style="display: none" class="btn btn-solid btn-small">search</button>
        </div>

        <div class="main-profile router">
            <a href="/cart"><i class="material-icons-outlined">shopping_cart</i></a>
            <i><a href="/notification">notifications</a></i>
            <div class="profile-pic">
                <img src="${getUserProfileImage()}" alt="" srcset="">
            </div>
            <h5 class="fnt fnt-bold fnt-mid"><a href="/profile">Senith Uthsara</a> </h5>
        </div>
        
    </nav>
        `;
    }




}

customElements.define('nav-bar', Navbar);