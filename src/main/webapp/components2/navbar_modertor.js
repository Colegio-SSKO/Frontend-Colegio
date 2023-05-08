class Navbar2 extends HTMLElement {
    async connectedCallback() {

        this.innerHTML = `
   

    
        
        <nav>
      <div class="navbar-left">
        <span  class="fnt fnt-extraLarge fnt-bold pagename">Moderator</span>
      </div>
      
    </nav>

    
    
    
    
    
    
    
    
    
        `;


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

customElements.define('nav-barmoderator', Navbar2);