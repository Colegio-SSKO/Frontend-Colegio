class Signin1 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                  <section class="signup">
                          <div class="hero">
                          <form method="post" >
                                <div class="form">
                                <h1 class="fnt fnt-extraBold fnt-extraLarge">Welcome To Colegio</h1>
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
                                <button id="js-signin-btn" class="btn btn-solid fnt fnt-mid fnt-bold" type="submit"> Sign in </button>
                              </div>
                          </form>
                              
    <!--                        </div>-->
                          </div>
                        
                          <div class="footer">
                            <div class="footer-menu">
                              <ul>
                                <li><a href="" class="fnt fnt-mid fnt-bold">About</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">Help Center</a></li>
                                <li><a href="" class="fnt fnt-mid fnt-bold">User Argument</a></li>
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
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";
                popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">Password or email is empty</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

                `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
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
                    let popup = document.querySelector(".popup-content");
                    document.querySelector(".popup-container").style.display = "flex";
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${receivedData["message"]}</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

                `;       let ok_btn = document.getElementById("ok-btn");
                    ok_btn.addEventListener("click", ()=>{
                        document.querySelector(".popup-container").style.display = "none";
                    })

                    password.value = "";
                    email.value = "";
                }

                else{

                    let popup = document.querySelector(".popup-content");
                    document.querySelector(".popup-container").style.display = "flex";
                    popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${receivedData["message"]}</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

                `;       let ok_btn = document.getElementById("ok-btn");
                    ok_btn.addEventListener("click", ()=>{
                        document.querySelector(".popup-container").style.display = "none";
                    })
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