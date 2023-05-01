class Edit_email extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="./images/Prof Pict.png" alt="your-image-description">
            <div class="text fnt fnt-bold fnt-mid link"><a class="link" href="">Edit</a></div>
        </div>
        <div class="main-details">
                <label for="email" class="fnt fnt-bold fnt-mid">Email</label><br>
                <input type="Password" name="" id="currPassword1" class="fnt fnt-bold fnt-mid" placeholder="Enter Current Password"><br>
                <input type="email" name="" id="currEmail1" class="fnt fnt-bold fnt-mid" placeholder="Enter Current Email"><br>
                <input type="email" name="" id="newEmail1" class="fnt fnt-bold fnt-mid" placeholder="Enter New Email"><br>
                <button class="btn btn-solid fnt fnt-bold fnt-mid" id="email-save-btn" type="submit">Save</button><br>
        </div>

        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
        `;
    }
}

customElements.define('edit-email', Edit_email);