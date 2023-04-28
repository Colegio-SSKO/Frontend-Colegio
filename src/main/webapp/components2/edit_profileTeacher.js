class Edit_profileteacher extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
<form>
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="../static/img/components_images/Prof%20Pict.png" alt="your-image-description">
            <div class="text fnt fnt-bold fnt-mid"><a href="">Edit</a></div>
        </div>
        <div class="main-details">
            
                <label for=""  class="fnt fnt-bold fnt-mid">First name</label><br>
                <input type="text" class="fname fnt fnt-bold fnt-mid" name="firstName" id="" required><br>

                <label for="" class="fnt fnt-bold fnt-mid">Last name</label><br>
                <input type="text" class="lname fnt fnt-bold fnt-mid" name="lastName" id="" required><br>

                <label class="fnt fnt-bold fnt-mid" for="">Date of birth</label><br>
                <input type="date" class="dob fnt fnt-bold fnt-mid" name="dob" id="" required><br>

                <button id="save-btn" class="btn btn-solid fnt fnt-bold fnt-mid">Save</button><br>
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
    </form>
        `;
    }
}

customElements.define('edit-profileteacher', Edit_profileteacher);