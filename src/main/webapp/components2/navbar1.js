class Navbar1 extends HTMLElement {





    async connectedCallback() {

        this.innerHTML = `
    <nav>

        <h3 class="pagename fnt fnt-bold fnt-extraLarge">Notifications</h3>
        
        <div class="nav-middle">
            <input type="text" id="main_search_icon" class="fnt fnt-bold" placeholder="Search here ...">
            <button class="btn btn-solid"><a href="/test">search</a></button>
        </div>

        <div class="main-profile router">
            <a href="/cart"><img class="is-a-route" src="../static/img/components_images/shopping_cart.svg" alt=""></a>
            <div class="noti-wrapper">
                <a href="/notification"><img class="is-a-route" src="../static/img/components_images/notifications.svg" alt=""><span id="navbar-notification-count" class="fnt fnt-small is-a-route">4</span></a>
            </div>
            <div class="profile-pic">
                <img src="${userProfileImage}" alt="" srcset="">
            </div>
            <h5 class="fnt fnt-bold fnt-mid"><a href="/profile">${username}</a> </h5>
        </div>
        
    </nav>
        `;


            increaseNotificationCount = ()=>{
            let notificationCount = document.querySelector("#navbar-notification-count");
            let count = parseInt(notificationCount.innerHTML);
            count++;
            notificationCount.innerHTML = count.toString();
        }
    }





}

customElements.define('nav-bar', Navbar1);