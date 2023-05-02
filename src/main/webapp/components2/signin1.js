class Signin1 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                  <section class="signup">
                          <div class="hero">
                              <div class="form">
                                <h1 class="fnt fnt-extraBold fnt-extraLarge">Wellcome To Colegio</h1>
                                <div class="inputs">
                        
                                  <div class="input-field">
                                    <label for="email" class="fnt fnt-mid fnt-bold">Email</label>
                                    <input id="email" class="fnt fnt-mid fnt-bold" type="email" required>
                                  </div>
                                  <div class="input-field">
                                    <label for="password" class="fnt fnt-mid fnt-bold">Password</label>
                                    <input id="password" class="fnt fnt-mid fnt-bold" type="password" required>
                                  </div>
                                  <div class="input-field">
                                    <label class="fnt fnt-mid fnt-bold" for="">Forgot Your <span><a href="/auth/forgotPassword" class="link">Password</a></span> ?</label>
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


        const handleSubmit =async (e)=>{
            e.preventDefault();
            const email = document.querySelector("#email");
            const password = document.querySelector("#password");

            if (email.value.length == 0 || password.value.length == 0){
                alert("Password or email is empty")
            }
            else{
                const data = {
                    "email" : email.value,
                    "password" : password.value
                }


                let response = await fetch("http://localhost:8090/api/authenticate/signin", {method : "POST",  body : JSON.stringify(data), credentials: 'include'}).then((response) => {
                    return response;
                })

                let receivedData = await response.json();
                if(receivedData["isError"]){
                    alert(receivedData["message"])
                    password.value = "";
                    email.value = "";
                }

                else{
                    alert(receivedData["message"])

                    //setting the user data


                    //sending to home page
                    window.history.pushState({}, "", "/");
                    urlLocation();

                }
            }



        }

        //query selectors
        document.querySelector("#js-signin-btn").addEventListener('click', handleSubmit);
    }
}

customElements.define('sign-in', Signin1);