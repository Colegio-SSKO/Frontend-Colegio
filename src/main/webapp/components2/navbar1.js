class Navbar1 extends HTMLElement {





    async connectedCallback() {

        this.innerHTML = `
   

    
        
        <nav>
      <div class="navbar-left">
        <span  class="fnt fnt-extraLarge fnt-bold pagename">title</span>
      </div>
      <div class="navbar-middle">
        <form class="search-form">
          <input type="text" id="main_search_icon" class="fnt-bold fnt fnt-mid" placeholder="Search...">
          <a href="/test"><button id="js-main-search-btn" class=" normal-user-is-a-route is-a-route fnt fnt-mid fnt-bold" type="submit">Search</button></a>
        </form>
      </div>
      <div class="navbar-right">
          <div>
            <a href="/cart" class="navbar-right-icon"><img class="signin-user-is-a-route is-a-route" src="../static/img/components_images/shopping_cart.svg" alt=""></a>
            <a href="/notification" class="navbar-right-icon"><img class="signin-user-is-a-route is-a-route" src="../static/img/components_images/notifications.svg" alt=""></i></a>
            <span class="noti-number">5</span>
          </div>

        <div class="navbar-right-user">
          <img src="${userProfileImage}" alt="" srcset="">
          <a href="/profile"><span class="signin-user-is-a-route is-a-route">${username}</span></a>
        </div>
      </div>
    </nav>

    
    
    
    
    
    
    
    
    
        `;
        let searchIcon = document.querySelector('#main_search_icon');
        let searchButton = document.querySelector('#js-main-search-btn');

        searchButton.addEventListener('click', ()=>{
            temporary_data = searchIcon.value;
            alert(temporary_data)
        })


            increaseNotificationCount = ()=>{
                let notificationCount = document.querySelector("#navbar-notification-count");
                if (!notificationCount){
                    alert("notification count ek load wela ne")
                }
                let count = parseInt(notificationCount.innerHTML);
                count++;
                notificationCount.innerHTML = count.toString();
        }
    }





}

customElements.define('nav-bar', Navbar1);