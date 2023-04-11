class Edit_profile extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="../static/img/components_images/Prof%20Pict.png" alt="your-image-description">
            <div class="text"><a href="">Edit</a></div>
        </div>
        <div class="main-details">
            
                <label for="">First name</label><br>
                <input type="text" class="fname" name="firstName" id=""><br>

                <label for="">Last name</label><br>
                <input type="text" class="lname" name="lastName" id=""><br>

                <label for="edu">Education Level</label><br>
                <select name="edu" id="edu" >
                    <option >Undergraduate</option>
                    <option >Postgraduate</option>
                    <option >A-Level</option>
                    <option >O-level</option>
                </select><br>

                <button id="save-btn" class="btn btn-solid" >Save</button><br>
                <button class="btn btn-solid" ><a href="/change_password">Edit Privacy & Security</a></button>

           
        </div>
        <div class="gender">
            <label for="edu">Gender</label><br>
            <select name="gender" id="gender" >
                <option >Male</option>
                <option >Female</option>
                <option >Other</option>
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