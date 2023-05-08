class upgrade_form_org extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <div class="account-upgrade-container">
        <div class="upgrade">
            <form method="post" class="upgrade-form">
                <label class="fnt fnt-extraLarge fnt-bold upgrader-hero">Let's Upgrade your account as Organization</label><br><br>
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">First Name:</label>
                <input class="upgrade-inputs fname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Last Name:</label>
                <input class="upgrade-inputs lname fnt fnt-bold fnt-mid" type="text" id="name" name="name" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Address:</label>
                <input class="upgrade-inputs address fnt fnt-bold fnt-mid" type="text" id="address" name="address" required>
                
                <label class="upgrade-label fnt fnt-bold fnt-large" for="name">Tel No:</label>
                <input class="upgrade-inputs telnum fnt fnt-bold fnt-mid" type="number" length="10" id="telnum" name="telnum" minlength="10" maxlength="10" required>
                 
                <button class="btn btn-large btn-outlined fnt fnt-mid fnt-bold" id="submit_btn" type="submit">Submit</button>
              </form>
              
        </div>
      </div>
      
        `;



        let submit_btn = document.querySelector("#submit_btn");

        submit_btn.addEventListener('click', async ()=>{
            console.log("Submit button clicked!");

            let fName = document.querySelector(".fname");
            let lName = document.querySelector(".lname");
            let address = document.querySelector(".address");
            let telnum = document.querySelector(".telnum");

            // if (!fName || !lName || !address || !telnum || telnum.length !== 10 || isNaN(telnum)) {
            //     return;
            // }

            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "address" : address.value,
                "telnum" : telnum.value,

            }



            let resp = await fetch("http://localhost:8090/api/students/upgrade_to_organization/:"+getUserID(), {method : "POST",  body : JSON.stringify(req)}).then((data)=>{
                return data.json();
            });

            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";

            let message = resp["message"];
            if (message=="Upgrade account successfully"){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
                        <button class="btn btn-small" id="ok-btn">OK</button>
                       
                `;
                let logoutBtn = document.querySelector("#ok-btn");
                logoutBtn.addEventListener('click', async ()=>{
                    alert("logout");
                    let logoutResponse = await fetch('http://localhost:8090/api/authenticate/logout/', {
                        credentials: 'include'
                    })
                        .then((response)=>{
                            return response.json();
                        })
                    alert(logoutResponse["isSuccess"]);
                    if (logoutResponse["isSuccess"]){
                        closeWebsockets();
                        //sending to home page
                        window.history.pushState({}, "", "/");
                        urlLocation();
                    }
                    else{
                        alert("logout error");
                    }

                })
            }
        })


    }
}

customElements.define('upgrade-formorg', upgrade_form_org);