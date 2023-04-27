class Edit_profile extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="../static/img/components_images/Prof%20Pict.png" alt="your-image-description">
            <div class="text fnt fnt-bold fnt-mid"><a href="">Edit</a></div>
        </div>
        <div class="main-details">
            
                <label for=""  class="fnt fnt-bold fnt-mid">First name</label><br>
                <input type="text" class="fname fnt fnt-bold fnt-mid" name="firstName" id=""><br>

                <label for="" class="fnt fnt-bold fnt-mid">Last name</label><br>
                <input type="text" class="lname fnt fnt-bold fnt-mid" name="lastName" id=""><br>

                <label class="fnt fnt-bold fnt-mid" for="edu">Education Level</label><br>
                <select class="fnt fnt-bold fnt-mid" name="edu" id="edu" >
                    <option  class="fnt fnt-bold fnt-mid" >Undergraduate</option>
                    <option  class="fnt fnt-bold fnt-mid">Postgraduate</option>
                    <option  class="fnt fnt-bold fnt-mid">A-Level</option>
                    <option  class="fnt fnt-bold fnt-mid">O-level</option>
                </select><br>

                <button id="save-btn" class="btn btn-solid fnt fnt-bold fnt-mid" >Save</button><br>
                <button class="btn btn-solid fnt fnt-bold fnt-mid" ><a href="/change_password">Edit Privacy & Security</a></button>

           
        </div>
        <div class="gender">
            <label for="edu" class="fnt fnt-bold fnt-mid">Gender</label><br>
            <select name="gender" class="fnt fnt-bold fnt-mid" id="gender" >
                <option  class="fnt fnt-bold fnt-mid">Male</option>
                <option  class="fnt fnt-bold fnt-mid">Female</option>
                <option  class="fnt fnt-bold fnt-mid">Other</option>
            </select><br>
        </div>
        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
        `;
    }
}

customElements.define('edit-profile', Edit_profile);