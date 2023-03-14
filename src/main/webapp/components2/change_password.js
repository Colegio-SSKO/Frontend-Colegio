class Change_password extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="./images/Prof Pict.png" alt="your-image-description">
            <div class="text"><a href="">Edit</a></div>
        </div>
        <div class="main-details">
            

                <label for="password">Password</label><br>
                <input type="password" name="" id="currPassword" placeholder="Enter Current Password"><br>
                <input type="password" name="" id="newPassword" placeholder="Enter New Password"><br>
                <input type="password" name="" id="againPassword" placeholder="Again New Password"><br>
                <button class="btn btn-solid" id="Pass-save-btn" type="submit">Save</button><br>
                <a href="./edit_email">Edit Email</a><br>

            
        </div>

        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
        `;
    }
}

customElements.define('change-password', Change_password);