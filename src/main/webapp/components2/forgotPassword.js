class ForgotPassword extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                  <section class="signup">
                          <div class="hero">
                              <div class="form">
                                <h1 class="fnt fnt-extraBold fnt-extraLarge">Forgot Your Password?</h1>
                                <div id="js-forgotpassword-input-wrap" class="inputs">    
                                      <div class="input-field">
                                        <p class="fnt fnt-mid fnt-bold">We will send you a one time password. You have to provide it when asked.</p>
                                        </br>
                                        <label for="email" class="fnt fnt-mid fnt-bold">Enter account email</label>
                                        <input id="js-forgot-password-email" class="fnt fnt-mid fnt-bold" type="email" required>
                                      </div>    
                                      <button id="js-forgot-password-send-btn" class="btn btn-solid  fnt fnt-mid fnt-bold"> Send</button>
                                </div>
                                
                              </div>
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

        //send button
        document.querySelector('#js-forgot-password-send-btn').addEventListener('click', async ()=>{
            let emailReq = {
                "email" : document.querySelector('#js-forgot-password-email').value
            }
            alert("send ek wed")
            document.querySelector('#js-forgotpassword-input-wrap').innerHTML = `
                    <div class="preloader">
                        <div class="spinner"></div>
                    </div>
            `;

            let response = await fetch("http://localhost:8090/api/authenticate/sendOTP/", {
                method : "POST",
                body : JSON.stringify(emailReq),
                credentials: 'include'
            }).then((response) => {
                return response.json();
            })
            if (response["isError"]){
                alert(response["message"])
            }
            else {
                document.querySelector('#js-forgotpassword-input-wrap').innerHTML = `
                   
                    
                    <label class="fnt fnt-mid fnt-bold">Enter the one time password recieved at ${emailReq["email"]}</label>
                    <input id="js-forgot-password-otp" class="fnt fnt-mid fnt-bold" type="text" required>
                    <button id="js-forgot-password-send-btn" class="btn btn-solid  fnt fnt-mid fnt-bold"> Send</button>
                `;

                document.querySelector('#js-forgot-password-send-btn').addEventListener('click', async ()=>{
                    let otpReq = {
                        "email" : emailReq["email"],
                        "otp" : document.querySelector('#js-forgot-password-otp').value
                    }

                    let response = await fetch("http://localhost:8090/api/authenticate/verify/", {
                        method : "POST",
                        body : JSON.stringify(otpReq),
                        credentials: 'include'
                    }).then((response) => {
                        return response.json();
                    })
                    if (response["isError"]){
                        alert(response["message"])
                    }
                    else {

                        alert(response["message"])
                        document.querySelector('#js-forgotpassword-input-wrap').innerHTML = `
                            <label class="fnt fnt-mid fnt-bold">Enter a new password</label>
                            <input id="js-forgot-password-newPassword" class="fnt fnt-mid fnt-bold" type="text" required>
                            
                             <label class="fnt fnt-mid fnt-bold">Confirm new password</label>
                            <input id="js-forgot-password-confirmPassword" class="fnt fnt-mid fnt-bold" type="text" required>
                            
                            <button id="js-forgot-password-send-btn" class="btn btn-solid  fnt fnt-mid fnt-bold"> Confirm </button>
                        `;

                        document.querySelector('#js-forgot-password-send-btn').addEventListener('click', async ()=>{


                            let newEnteredPassword = document.querySelector('#js-forgot-password-newPassword');
                            let newConfirmPassword = document.querySelector('#js-forgot-password-confirmPassword');

                            if (validatePassword(newEnteredPassword, newConfirmPassword)){
                                let newPassword = {
                                    "email": otpReq["email"],
                                    "otp" : otpReq["otp"],
                                    "password" : document.querySelector('#js-forgot-password-newPassword').value
                                }
                                alert(JSON.stringify(newPassword))

                                let passwordResp = await fetch("http://localhost:8090/api/authenticate/changePassword/", {
                                    method : "POST",
                                    body : JSON.stringify(newPassword),
                                    credentials: 'include'
                                }).then((response) => {
                                    return response.json();
                                })

                                if (passwordResp["isError"]){
                                    alert(passwordResp["message"]);
                                }
                                else{
                                    alert(passwordResp["message"]);
                                    window.history.pushState({}, "", "/auth/signin");
                                    urlLocation();
                                }


                            }
                        })







                    }

                });



            }
        })

    }
}

customElements.define('forgot-password', ForgotPassword);