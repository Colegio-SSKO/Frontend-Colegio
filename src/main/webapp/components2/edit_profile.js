class Edit_profile extends HTMLElement {
    connectedCallback() {

        let img_src= this.attributes.img_src.value;


        this.innerHTML = `
      <div class="edit-profile">
        <div id="edit_image" class="pro-pic-edit">
            <img src="${img_src}"  alt="your-image-description">
            <div class="text fnt fnt-bold fnt-mid">Edit</div>
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
                <a href="/change_password"><button class="btn btn-solid fnt fnt-bold fnt-mid is-a-route" >Edit Privacy & Security</button></a>

           
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





        //sending data
        let fName = document.querySelector(".fname");
        let lName = document.querySelector(".lname");
        let edu = document.querySelector("#edu");
        let gender = document.querySelector("#gender");

        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', async ()=>{

            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "edu" : edu.value,
                "gender" : gender.value
            }
            let resp = await fetch("http://localhost:8090/api/users/editProfile/:1", {
                method : "POST",
                body : JSON.stringify(req),
                credentials : "include"
            })
                .then((data)=>{
                    return data.json()
                });
            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";

            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
                `;
            }
            else {
                popup.innerHTML = `
                     <img src="../static/img/components_images/error.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
                `;
            }

            let ok_btn = document.getElementById("ok-btn");
            ok_btn.addEventListener("click", ()=>{
                document.querySelector(".popup-container").style.display = "none";
            })
        })






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

                        return res.json();
                    })

                if(!fileUploadresponseme["isError"]){


                    let textData = {
                        "image" : fileUploadresponseme["thumbnail"],
                    }



                    //send the request
                    let uploadresponse = await fetch('http://localhost:8090/api/users/upload_pro_pic/:'+getUserID(), {
                        method : "POST",
                        body:JSON.stringify(textData),
                        credentials : "include"
                    })
                        .then((res)=>{
                            return res.json();
                        })

                    if(!textUploadresponseme["isError"]){
                        alert("Upload una");
                        userProfileImage=fileUploadresponseme["thumbnail"];
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

customElements.define('edit-profile', Edit_profile);