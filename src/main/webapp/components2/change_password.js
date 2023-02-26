class Edit_email extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="edit-profile">
        <div class="pro-pic-edit">
            <img src="./images/Prof Pict.png" alt="your-image-description">
            <div class="text"><a href="">Edit</a></div>
        </div>
        <div class="main-details">
            <form >
                <label for="Fname">Fname</label><br>
                <input type="text" name="Fname" id=""><br>

                <label for="Lname">Lname</label><br>
                <input type="text" name="Lname" id=""><br>

                <label for="edu">Education Level</label><br>
                <select name="edu" id="edu" >
                    <option value="">Undergraduate</option>
                    <option value="">Postgraduate</option>
                    <option value="">A-Level</option>
                    <option value="">O-level</option>
                </select><br>
                
                <label for="email">Email</label><br>
                <input type="email" name="" id="">
                <a href="./edit_email">Edit</a><br>

                <label for="email">Password</label><br>
                <input type="email" name="" id="" placeholder="Enter Current Password"><br>
                <input type="email" name="" id="" placeholder="Enter New Password"><br>
                <input type="email" name="" id="" placeholder="Enter Old Password"><br>

                <button class="btn btn-solid" type="submit">Save</button><br>

            </form>
        </div>
        <div class="gender">
            <label for="edu">Gender</label><br>
            <select name="edu" id="edu" >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
            </select><br>
        </div>
        <div class="back-btn">
            <a href=""><img src="./images/arrow_back.png" alt=""></a>
        </div>
    </div>
        `;
    }
}

customElements.define('change-password', Change_password);