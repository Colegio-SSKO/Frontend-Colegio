class Edit_profileorg extends HTMLElement {
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

                <label class="fnt fnt-bold fnt-mid" for="">Address</label><br>
                <input type="text" class="address fnt fnt-bold fnt-mid" name="address" id="" required><br><br>

                <button id="save-btn" type="submit" class="btn btn-solid fnt fnt-bold fnt-mid">Save</button><br>
                <button class="btn btn-solid fnt fnt-bold fnt-mid" ><a href="/change_password">Edit Privacy & Security</a></button>

           
        </div>
        <div class="gender">
            <label for="" class="fnt fnt-bold fnt-mid" required>Tel number</label><br>
            <input type="tel" class="telnum fnt fnt-bold fnt-mid" name="telnum" id="" required><br><br>
        </div>
        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
    </form>
        `;
    }
}

customElements.define('edit-profileorg', Edit_profileorg);