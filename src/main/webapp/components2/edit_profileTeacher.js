class Edit_profileteacher extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;

        this.innerHTML = `
<form>
      <div class="edit-profile">
        <div id="edit_image" class="pro-pic-edit">
            <img src="${img_src}"  alt="your-image-description">
            <div class="text fnt fnt-bold fnt-mid">Edit</div>
        </div>
        <div class="main-details">
            
                <label for=""  class="fnt fnt-bold fnt-mid">First name</label><br>
                <input type="text" class="fname fnt fnt-bold fnt-mid" name="firstName" id="" required><br>

                <label for="" class="fnt fnt-bold fnt-mid">Last name</label><br>
                <input type="text" class="lname fnt fnt-bold fnt-mid" name="lastName" id="" required><br>

                <label class="fnt fnt-bold fnt-mid" for="">Date of birth</label><br>
                <input type="date" class="dob fnt fnt-bold fnt-mid" name="dob" id="" required><br>

                <button id="save-btn" class="btn btn-solid fnt fnt-bold fnt-mid">Save</button><br>
                <a href="/change_password"><button class="btn btn-solid btn-a is-a-route fnt fnt-bold fnt-mid" >Edit Privacy & Security</button></a>

           
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



        let edit = document.querySelector("#edit_image");

        edit.addEventListener('click', async ()=>{
            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";

            popup.innerHTML = `
                   
                       <h2><form>
                                Upload Your profile picture<br>
                                <input type="file" id="js-thumbnail-upload" class=" myFile fnt fnt-light fnt-mid" name="thumbnail"><br><br>
                                <a href="/edit_profile"><button class="submit is-a-route">OK</button></a>
                            </form>
                       </h2>
                       
                       
                `;

            let thumbnailUpload = document.querySelector("#js-thumbnail-upload");




            document.querySelector('.submit').addEventListener('click', async (event)=>{
                event.preventDefault();


                let formData = new FormData();

                formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

                let fileUploadresponseme = await fetch('http://localhost:8080/api/uploadPropic/', {method : "POST", body:formData})
                    .then((res)=>{
                        alert(JSON.stringify(res));
                        return res.json();
                    })

                if(!fileUploadresponseme["isError"]){
                    alert("Upload una");
                    alert(JSON.stringify(fileUploadresponseme["thumbnail"]));

                    let textData = {
                        "image" : fileUploadresponseme["thumbnail"],
                    }

                    alert(JSON.stringify(textData))

                    //send the request
                    let uploadresponse = fetch('http://localhost:8090/api/users/upload_pro_pic/:'+getUserID(), {
                        method : "POST",
                        body:JSON.stringify(textData),
                        credentials : "include"
                    })
                        .then((res)=>{
                            return res.json();
                        })

                    if(!textUploadresponseme["isError"]){
                        alert("Upload una");
                    }
                    else{
                        alert("error ekak oi")
                    }

                }
                else{
                    alert("error ekak oi")
                }



                formData.append('textData', JSON.stringify(textData));

            })

        })
    }
}

customElements.define('edit-profileteacher', Edit_profileteacher);