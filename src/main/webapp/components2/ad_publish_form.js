class Ad_publish_form extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <div class="account-upgrade-container">
        <div class="upgrade">
            <form action="#" class="upgrade-form" method="post">
            
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="certification">Upload your ad(only jpg,png files)</label>
                <input type="file" id="certification" class="quli_certificates" name="certification" accept=".jpeg, .png">
                
                
                <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold " id="submit_btn" type="submit">Submit</button>
              </form>
              
        </div>
      </div>
      
        `;
    }
}

customElements.define('adpublish-form', Ad_publish_form);