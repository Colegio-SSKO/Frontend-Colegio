class Signin1 extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                  <section class="signup">
                      <div class="hero">
                    
                        <div class="right">
                          <div class="img">
                            <img src="../static/img/login/art2.png" alt="">
                          </div>
                          <div class="text">
                            <h2>Distance Learning</h2>
                            <p>Follow online cource on various subjects</p>
                          </div>
                        </div>
                    
                        <div class="left">
                          <div class="btn-top">
                            <a class="btn" href="">Sign In</a>
                          </div>
                          <div class="form">
                            <h1>Wellcome To Colegio</h1>
                            <div class="inputs">
                    
                              <div class="input-field">
                                <label for="email">Email</label>
                                <input id="email" type="email" required>
                              </div>
                              <div class="input-field">
                                <label for="password">Password</label>
                                <input id="password" type="password" required>
                              </div>
                              <div class="input-field">
                                <label for="">Forget Your <span>Password</span> ?</label>
                              </div>
                            </div>
                            <button id="js-signin-btn" class="btn btn-small btn-solid"> Sign in </button>
                            <h3>or</h3>
                          </div>
                        </div>
                      </div>
                    
                      <div class="footer">
                        <div class="footer-menu">
                          <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">User Agrement</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Cookie Policy</a></li>
                          </ul>
                        </div>
                      </div>
                    </section>

        `;


        const handleSubmit =async (e)=>{
            e.preventDefault();
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            if (email.length == 0 || password.length == 0){
                alert("Password or email is empty")
            }
            else{
                const data = {
                    "email" : email,
                    "password" : password
                }


                let response = await fetch("http://localhost:8090/api/authenticate/signin", {method : "POST",  body : JSON.stringify(data), credentials: 'include'}).then((response) => {
                    return response;
                })

                let receivedData = await response.json();
                if(receivedData["isError"]){
                    alert(receivedData["message"])
                }

                else{
                    alert(receivedData["message"])
                    const jwtToken = await fetch("http://localhost:8090/api/users/getToken/", {
                        credentials: 'include'
                    })
                        .then((response)=>{
                            return response.json()
                        })


                    //notifications handling
                    const notificationWebSocket = new WebSocket('ws://localhost:8090/notificationHandler');


                    console.log("mekth wed");
                    console.log(jwtToken["token"]);
                    console.log("wed");
                    notificationWebSocket.onopen = () =>{
                        alert("open unaaa");
                        const message = {
                            "config" : true,
                            "token" : jwtToken["token"]
                        }
                        notificationWebSocket.send(JSON.stringify(message));
                    }

                    notificationWebSocket.onerror = (error) => {
                        console.error('notification web socket error:', error);
                    };

                    //setting the user type
                    userType = 1;

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