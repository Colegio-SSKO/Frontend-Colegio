class Change_password extends HTMLElement {
    connectedCallback() {
        let img_src= this.attributes.img_src.value;

        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="${img_src}" alt="your-image-description">
        </div>
        <div class="main-details">
            

                <label class="fnt fnt-bold fnt-mid" for="password">Password</label><br>
                <input class="fnt fnt-bold fnt-mid" type="password" name="" id="currPassword" placeholder="Enter Current Password"><br>
                <input class="fnt fnt-bold fnt-mid" type="password" name="" id="newPassword" placeholder="Enter New Password"><br>
                <input class="fnt fnt-bold fnt-mid" type="password" name="" id="againPassword" placeholder="Again New Password"><br>
                <button class="fnt fnt-bold fnt-mid btn btn-solid" id="Pass-save-btn" type="submit">Save</button><br>
                <a href="./edit_email"  class="fnt fnt-bold fnt-mid link">Edit Email</a><br>

            
        </div>

        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
        `;
    }
}

customElements.define('change-password', Change_password);