class Navbar1 extends HTMLElement {





     connectedCallback() {

        this.innerHTML = `
    
                        <nav>
                      <div class="navbar-left">
                        <span  class="fnt fnt-extraLarge fnt-bold pagename">title</span>
                      </div>
                      <div class="navbar-middle">
                          <input type="text" id="main_search_icon" class="fnt-bold fnt fnt-mid" placeholder="Search...">
                          <button class=" normal-user-is-a-route fnt fnt-mid fnt-bold" >Search</button>
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


        let btn = document.querySelector(".normal-user-is-a-route");
        btn.addEventListener("click",()=>{
            alert("jjj");
            temporary_data = document.querySelector("#main_search_icon").value;
            alert(temporary_data);
            window.history.pushState({}, "", "/test");
            urlLocation();

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