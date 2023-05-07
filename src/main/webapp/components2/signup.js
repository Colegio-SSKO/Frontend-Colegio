class Signup extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                       <section class="signup-signup">
                          <div class="hero-signup">
                          <form method="post">
                              <div class="form">
                                <h1 class="fnt fnt-extraBold fnt-extraLarge">Create your free account</h1>
                                <div class="inputs">
                        
                                 <div>
                                         <div class="input-field">
                                        <label for="fname" class="fnt fnt-mid fnt-bold">First name</label>
                                        <input name="fname" id="fname" class="fnt fnt-mid fnt-bold" type="text" required>
                                      </div>
                                      <div class="input-field">
                                        <label for="lname" class="fnt fnt-mid fnt-bold">Last name</label>
                                        <input name="lname" id="lname" class="fnt fnt-mid fnt-bold" type="text" required>
                                      </div>
                                 </div>
                                 
                                 <div class="input-field">
                                    <label for="address" class="fnt fnt-mid fnt-bold">Address:</label>
                                    <textarea id="address" name="address" rows="2" class="fnt fnt-mid fnt-bold" cols="20" required></textarea>
                                 </div>
                                 <div class="input-field">
                                    <label for="telnum" class="fnt fnt-mid fnt-bold">Telephone Number</label>
                                    <input name="telnum" id="telnum" class="fnt fnt-mid fnt-bold" type="number" minlength="10" maxlength="10" required>
                                 </div>

                                  <div class="input-field">
                                    <label for="city" class="fnt fnt-mid fnt-bold">City:</label>
                                    <select id="city" name="city" class="fnt fnt-mid fnt-bold" required>
                                        <option class="fnt fnt-mid fnt-bold" value="">Select a city</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Colombo">Colombo</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Gampaha">Gampaha</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Kandy">Kandy</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Galle">Galle</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Matara">Matara</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Jaffna">Jaffna</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Batticaloa">Batticaloa</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Trincomalee">Trincomalee</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Anuradhapura">Anuradhapura</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Polonnaruwa">Polonnaruwa</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Kurunegala">Kurunegala</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Badulla">Badulla</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Ratnapura">Ratnapura</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Puttalam">Puttalam</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Hambantota">Hambantota</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Matale">Matale</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Nuwara Eliya">Nuwara Eliya</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Kalutara">Kalutara</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Kegalle">Kegalle</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Mullaitivu">Mullaitivu</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Mannar">Mannar</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Vavuniya">Vavuniya</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Kilinochchi">Kilinochchi</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Ampara">Ampara</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Monaragala">Monaragala</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Battaramulla">Battaramulla</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Dehiwala-Mount Lavinia">Dehiwala-Mount Lavinia</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Moratuwa">Moratuwa</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Panadura">Panadura</option>
                                        <option class="fnt fnt-mid fnt-bold" value="Kotte">Kotte</option>
                                        <option class="fnt fnt-mid fnt-bold"  value="Piliyandala">Piliyandala</option>
                                    </select>
                                 </div>    

                            
                                  
                                  <div class="input-field">
                                    <label for="email" class="fnt fnt-mid fnt-bold">Email Address</label>
                                    <input name="email" id="email" class="fnt fnt-mid fnt-bold" type="email" required>
                                  </div>
                                  
                                  <div>
                                          <div class="input-field">
                                            <label for="password" class="fnt fnt-mid fnt-bold">New Password</label>
                                            <input name="password" id="password" class="fnt fnt-mid fnt-bold" type="password" required>
                                          </div>
                                          
                                           <div class="input-field">
                                            <label for="cpassword" class="fnt fnt-mid fnt-bold">Confirm Password</label>
                                            <input name="cpassword" id="cpassword" class="fnt fnt-mid fnt-bold" type="password" required>
                                          </div>
                                  </div>
                                  <div class="input-field">
                                    <label class="fnt fnt-mid fnt-bold" for="">Already have an account? <span><a href="/auth/signin" class="link">Signin</a></span></label>
                                  </div>
                                </div>
                                <button id="js-signin-btn" class="btn btn-solid fnt fnt-mid fnt-bold" type="submit"> Sign Up </button>
                              </div>
                          </form>
                              
    <!--                        </div>-->
                          </div>
                        
                          <div class="footer">
                            <div class="footer-menu">
                              <ul>
                                <li><a href="" class="fnt fnt-mid fnt-bold">About</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">Help Center</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">User Agrement</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">Privacy Policy</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">Cookie Policy</a></li>
                              </ul>
                            </div>
                          </div>
                  </section>

        `;


        const fname = document.querySelector("#fname");
        const lname = document.querySelector("#lname");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const address = document.querySelector("#address");
        const tel_num = document.querySelector("#telnum");
        const city = document.querySelector("#city");
        const cpassword = document.querySelector("#cpassword");
        const submitBtn = document.querySelector("#js-signin-btn");




        const numberCount = (str) => {
            let count = 0;
            for(let i of str){
                if(!isNaN(Number(i))){
                    count++;
                }
            }
            return count;
        }


        let error = "";
        //funtions
        const validateConfirmPassword = () => {
            if (password.value !== cpassword.value) {
                error = "Password and the confirm password do not match";
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Password and the confirm password do not match</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                return false
            }
            else{
                return true;
            }

        }

        const validatePasswordLength = () => {

            if (password.value.length <8){
                error  = "Password must have atleast 8 characters";
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Password must have atleast 8 characters</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                return false;
            }
            else
                return true;
        }

        const validateNumberLength = () => {
            if (numberCount(password.value)<1){
                error = "Password must have atleast one digit";
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Password must have atleast one digit</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                return false
            }
            else
                return true;
        }

        const validatePassword = () => {

            if (validateConfirmPassword() && validatePasswordLength() && validateNumberLength() ){

                return true;
            }
            else{
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${error}</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })

                return false;
            }

        }


        //validate email




        const handleSubmit = async (e) => {
            e.preventDefault();

            if (validatePassword()){
                //creating the JSON data
                const data = {
                    "DOB": "2000-02-08",
                    "verification_status": 0,
                    "proPic": "/default",
                    "fname" : fname.value,
                    "lname" : lname.value,
                    "email" : email.value,
                    "password" : password.value,
                    "address" : address.value,
                    "city" : city.value,
                    "tel_num" : tel_num.value

                }

//, body : `${data}`
                let response = await fetch("http://localhost:8090/api/authenticate/signup", {method : "POST",  body : JSON.stringify(data), credentials: 'include'}).then((response) => {
                    return response.json();
                });

                if (response["isError"]){
                    let popup = document.querySelector(".popup-content");
                    document.querySelector(".popup-container").style.display = "flex";
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${response["message"]}</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                    let ok_btn = document.getElementById("ok-btn");
                    ok_btn.addEventListener("click", ()=>{
                        document.querySelector(".popup-container").style.display = "none";
                    })
                }
                else {
                    let popup = document.querySelector(".popup-content");
                    document.querySelector(".popup-container").style.display = "flex";
                    popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">response["message"]</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                    let ok_btn = document.getElementById("ok-btn");
                    ok_btn.addEventListener("click", ()=>{
                        document.querySelector(".popup-container").style.display = "none";
                    })
                    window.history.pushState({}, "", "/auth/signin");
                    urlLocation();
                }




            }else {
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Resubmit</h2>
                        <button class="btn btn-primary " id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
            }

        }




        submitBtn.addEventListener("click", handleSubmit);

        //query selectors
        // document.querySelector("#js-signin-btn").addEventListener('click', handleSubmit);
    }
}

customElements.define('sign-up', Signup);