class upgrade_form_org extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <div class="account-upgrade-container">
        <div class="upgrade">
            <form method="post" class="upgrade-form">
                <label class="fnt fnt-extraLarge fnt-bold upgrader-hero">Let's Upgrade your account as Organization</label><br><br>
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">First Name:</label>
                <input class="upgrade-inputs fname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Last Name:</label>
                <input class="upgrade-inputs lname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Address:</label>
                <input class="upgrade-inputs address fnt fnt-bold fnt-mid" type="text" id="address" name="address" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Tel No:</label>
                <input class="upgrade-inputs telnum fnt fnt-bold fnt-mid" type="number" length="10" id="telnum" name="telnum" minlength="10" maxlength="10" required>
                 
                <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold" id="submit_btn" type="submit">Submit</button>
              </form>
              
        </div>
      </div>
      
        `;

    }
}

customElements.define('upgrade-formorg', upgrade_form_org);