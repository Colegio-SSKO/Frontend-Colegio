class Profile_upgrade_form extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <div class="account-upgrade-container">
        <div class="upgrade">
            <form action="#" class="upgrade-form" method="post">
            
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">First Name:</label>
                <input class="upgrade-inputs fname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Last Name:</label>
                <input class="upgrade-inputs lname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="education">Educational Level:</label>
                <textarea class="upgrade-inputs upgrade-textarea edu_level fnt fnt-bold fnt-mid" id="education" name="education" rows="5" required></textarea>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="certification">Qulification Certifications:</label>
                <input type="file" id="certification" class="quli_certificates" name="certification" accept=".pdf, .jpeg, .png">
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="references">References:</label>
                <textarea class="upgrade-inputs upgrade-textarea refer fnt fnt-bold fnt-mid" id="references" name="references" rows="5"></textarea>
                
                
                <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold " id="submit_btn" type="submit">Submit</button>
              </form>
              
        </div>
      </div>
      
        `;
    }
}

customElements.define('upgrade-form', Profile_upgrade_form);