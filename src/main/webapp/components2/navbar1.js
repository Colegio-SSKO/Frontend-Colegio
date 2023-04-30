class Navbar1 extends HTMLElement {





    async connectedCallback() {

        this.innerHTML = `
   

    
        
        <nav>
      <div class="navbar-left">
        <div class="fnt fnt-bold fnt-extraLarge"><span class="pagename">Home</span></div>
      </div>
      <div class="navbar-middle">
        <form class="search-form">
          <input type="text" id="main_search_icon" placeholder="Search...">
          <a href="/test"><button class="signin-user-is-a-route is-a-route" type="submit">Search</button></a>
        </form>
      </div>
      <div class="navbar-right">
        <a href="/cart" class="navbar-right-icon"><img class="signin-user-is-a-route is-a-route" src="../static/img/components_images/shopping_cart.svg" alt=""></a>
        <a href="/notification" class="navbar-right-icon"><img class="signin-user-is-a-route is-a-route" src="../static/img/components_images/notifications.svg" alt=""></i></a>
        <div class="navbar-right-user">
          <img src="${userProfileImage}" alt="" srcset="">
          <a href="/profile"><span class="signin-user-is-a-route is-a-route">${username}</span></a>
        </div>
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