class Ad_publish_form extends HTMLElement {
    connectedCallback() {
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
           <div class="account-upgrade-container">
                <div class="upgrade">
                <form action="#" class="upgrade-form" method="post">
                
                    
                    <label class="upgrade-label fnt fnt-bold fnt-extraLarge" for="certification">Upload your ad(only jpg,png files)</label><br>
                    <input type="file" id="certification" class="quli_certificates" name="certification" accept=".jpeg, .png"><br>
                    
                    
                    <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold " id="submit_btn" type="submit">Submit</button>
                </form><br><br>
                <center><img src="../static/img/add_img/add.png" width="400px" height="300px"><center>
              
        </div>
      </div>
      
        `;

        alert(organization_id);



        let addpublish = document.querySelector("#submit_btn");
        let thumbnailUpload = document.querySelector("#certification");



        addpublish.addEventListener('click', async (event)=>{
            event.preventDefault();

            alert("meka tm create course")

            //thumbnail
            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);




            //send save files request
            let fileUploadresponseme = await fetch('http://localhost:8080/api/addpublish/', {method : "POST", body:formData})
                .then((res)=>{

                    return res.json();
                })


            if(!fileUploadresponseme["isError"]){

                //handle text data submission here
                //textData

                let textData = {

                    "userId" : getUserID(),
                    "organization_id": organization_id,
                    "add" : fileUploadresponseme["thumbnail"],
                }


                //send save data to the db request to the backend
                let textUploadresponse = await fetch('http://localhost:8090/api/teachers/add_publish/', {
                    method : "POST",
                    body:JSON.stringify(textData),
                    credentials : "include"
                })
                    .then((res)=>{
                        return res.json()
                    })

                if(!Boolean(textUploadresponse["isError"])){
                    alert("Upload una");
                    window.history.pushState({}, "", "/profile");
                    urlLocation();
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


    }

}

customElements.define('adpublish-form', Ad_publish_form);