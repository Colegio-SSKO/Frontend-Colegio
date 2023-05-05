class Signup extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                       <section class="signup">
                          <div class="hero">
                              <div class="form">
                                <h1 class="fnt fnt-extraBold fnt-extraLarge">Create your free account</h1>
                                <div class="inputs">
                        
                                 <div style="display: flex;">
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
                                    <label for="email" class="fnt fnt-mid fnt-bold">Email Address</label>
                                    <input name="email" id="email" class="fnt fnt-mid fnt-bold" type="email" required>
                                  </div>
                                  
                                  <div style="display: flex">
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
                                    <label class="fnt fnt-mid fnt-bold" for="">Already have an account? <span><a href="/auth/signin" class="link">Signin</a></span> ?</label>
                                  </div>
                                </div>
                                <button id="js-signin-btn" class="btn btn-solid fnt fnt-mid fnt-bold"> Sign in </button>
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


        const fname = document.querySelector("#fname");
        const lname = document.querySelector("#lname");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
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
                return false
            }
            else{
                return true;
            }

        }

        const validatePasswordLength = () => {

            if (password.value.length <8){
                error  = "Password must have atleast 8 characters";
                return false;
            }
            else
                return true;
        }

        const validateNumberLength = () => {
            if (numberCount(password.value)<1){
                error = "Password must have atleast one digit";
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
                alert(error);
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
                    "password" : password.value

                }

//, body : `${data}`
                let response = await fetch("http://localhost:8090/api/authenticate/signup", {method : "POST",  body : JSON.stringify(data), credentials: 'include'}).then((response) => {
                    return response.json();
                });
                alert(JSON.stringify(response));

                if (response["isError"]){
                    alert(response["message"]);
                }
                else {
                    alert(response["message"]);
                    window.history.pushState({}, "", "/auth/signin");
                    urlLocation();
                }




            }else {
                alert("Resubmit");
            }

        }




        submitBtn.addEventListener("click", handleSubmit);

        //query selectors
        // document.querySelector("#js-signin-btn").addEventListener('click', handleSubmit);
    }
}

customElements.define('sign-up', Signup);