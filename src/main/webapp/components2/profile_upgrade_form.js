class Profile_upgrade_form extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <div class="account-upgrade-container">
        <div class="upgrade">
            <form action="#" class="upgrade-form" method="post">
            
                <label class="upgrade-label fnt fnt-bold fnt-large" for="education">Educational Level:</label>
                <textarea id="education_level" class="upgrade-inputs upgrade-textarea edu_level fnt fnt-bold fnt-mid" id="education" name="education" rows="5" required></textarea>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="certification">Qulification Certifications:</label>
                <input type="file" id="js-thumbnail-upload" class=" myFile fnt fnt-light fnt-mid" name="thumbnail">
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="references">References:</label>
                <textarea id="references" class="upgrade-inputs upgrade-textarea refer fnt fnt-bold fnt-mid" id="references" name="references" rows="5"></textarea>
                
                
                <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold " id="submit_btn" type="submit">Submit</button>
              </form>
              
        </div>
      </div>
      
        `;



        let upgradeToteacher = document.querySelector("#submit_btn");
        let thumbnailUpload = document.querySelector("#js-thumbnail-upload");



        upgradeToteacher.addEventListener('click', async (event)=>{
            event.preventDefault();

            //thumbnail
            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

            alert(formData)

            let uploadresponse = await fetch('http://localhost:8080/api/upgradeToteacher/', {method : "POST", body:formData})
                .then((res)=>{
                    alert(JSON.stringify(res));
                    return res
                })


            //textData
            // let education_level = document.querySelector("#education_level");
            // let references = document.querySelector("#references");
            //
            //
            //
            // let textData = {
            //
            //     "userId" : getUserID(),
            //     "education_level" : education_level.value,
            //     "references" : references.value,
            // }
            //
            // formData.append('textData', JSON.stringify(textData));
            //
            //
            // //send the request
            // let uploadresponse2 = fetch('http://localhost:8090/api/upgradetoteacher', {method : "POST", body:formData})
            //     .then((res)=>{
            //         return res
            //     })
            //
            // if(uploadresponse.ok){
            //     alert("Upload una");
            // }
            // else{
            //     alert("error ekak oi")
            // }
        })

    }
}

customElements.define('upgrade-form', Profile_upgrade_form);