class Signup extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                   <div class="form-container">
                        <a id="signinA" href="signin"><button class="simpleBtnWht">Sign In</button></a>
                        <div class="form-area">
                            <h1>Create Your Account</h1>
                            <form action="#" method="post" class="simpleForm">
                                <label for="fname">First Name</label>
                                <input id="fname" type="text" name="fname">
                                <label for="lname">Last Name</label>
                                <input id="lname" type="text" name="lname">
                                <label for="email">Email</label>
                                <input id="email" type="email" name="email">
                                <label for="password">Password</label>
                                <input id="password" type="password" name="password">
                                <label for="cpassword">Confirm password</label>
                                <input id="cpassword" type="password" name="cpassword">
                                <button class="simpleBtnOrng" type="submit">Sign Up</button>
                            </form>
                
                        </div>
                
                    </div>
                    <div class="vectors">
                        <img src="../static/img/signup/art.png" alt="a vector">
                        <div class="intro">
                            <div class="introList">
                                <div id="left" class="introcont">
                                    <h4>Distance Learning</h4>
                                    <p>Follow online courses <br> on various subjects.</p>
                                </div>
                <!-- 
                                <div id="middle" class="introcont ">
                                    <h4>Introduction 2</h4>
                                    <p>Into2 online courses <br> on various subjects.</p>
                                </div>
                
                                <div id="right" class="introcont ">
                                    <h4>Introduction 3</h4>
                                    <p>Into3 online courses <br> on various subjects.</p>
                                </div>
                                <div class="introcont introHide">
                
                                </div> -->
                            </div>
                
                            <div class="div-container">
                                <div class="simpleDots simpleDots-act"></div>
                                <div class="simpleDots"></div>
                                <div class="simpleDots"></div>
                            </div>
                        </div>
                
                        
                    </div>
                
                    <div class="bottom-nav">
                        <div class="nav-cont">
                            <ul>
                                <a href="#"><li>About</li></a>
                                <a href="#"><li>Help Center</li></a>
                                <a href="#"><li>User Agreement</li></a>
                                <a href="#"><li>Privacy Policy</li></a>
                                <a href="#"><li>Cookie Policy</li></a>
                                <a href="#"><li>Send Feedback</li></a>
                            </ul>
                        </div>
                    </div>

        `;


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

        const validateEmail = async () => {
            const data = {
                "email" : email.value

            }

            let isValidated = await fetch("http://localhost:8081/api/isUserExist", {method : "POST",  body : JSON.stringify(data)}).then((response)=>
                response.json()

            );

            alert(isValidated["isExist"]);
            return isValidated["isExist"]
        }


        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!(await validateEmail()) && validatePassword()){
                //creating the JSON data
                const data = {
                    "DOB": "2000-02-08",
                    "verification_status": 0,
                    "pro_pic": "/default",
                    "f_name" : fname.value,
                    "l_name" : lname.value,
                    "email" : email.value,
                    "password" : password.value

                }

//, body : `${data}`
                let insertedData = await fetch("http://localhost:8081/api/users", {method : "POST",  body : JSON.stringify(data)}).then((response)=>
                    response.json()

                );
                window.location.replace("/SPAroutes/index.jsp");


            }else {
                alert("Resubmit");
            }

        }



        const fname = document.querySelector("form #fname");
        const lname = document.querySelector("form #lname");
        const email = document.querySelector("form #email");
        const password = document.querySelector("form #password");
        const cpassword = document.querySelector("form #cpassword");


        const submitBtn = document.querySelector("form button")
        submitBtn.addEventListener("click", handleSubmit);

        //query selectors
        // document.querySelector("#js-signin-btn").addEventListener('click', handleSubmit);
    }
}

customElements.define('sign-up', Signup);