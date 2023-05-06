class Ad_publish_form extends HTMLElement {
    connectedCallback() {
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
           <div class="account-upgrade-container">
                <div class="upgrade">
                <form action="#" class="upgrade-form" method="post">
                
                    
                    <label class="upgrade-label fnt fnt-bold fnt-large" for="certification">Upload your ad(only jpg,png files)</label>
                    <input type="file" id="certification" class="quli_certificates" name="certification" accept=".jpeg, .png">
                    
                    
                    <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold " id="submit_btn" type="submit">Submit</button>
                </form>
              
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
                    alert(JSON.stringify(res));
                    return res.json();
                })


            if(!fileUploadresponseme["isError"]){
                alert("Upload una");
                alert(JSON.stringify(fileUploadresponseme["thumbnail"]));
                //handle text data submission here
                //textData

                let textData = {

                    "userId" : getUserID(),
                    "add" : fileUploadresponseme["thumbnail"],
                }


                //send save data to the db request to the backend
                let textUploadresponse = await fetch('http://localhost:8090/api/teachers/publish_add/', {
                    method : "POST",
                    body:JSON.stringify(textData),
                    credentials : "include"
                })
                    .then((res)=>{
                        return res.json()
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


    }

}

customElements.define('adpublish-form', Ad_publish_form);