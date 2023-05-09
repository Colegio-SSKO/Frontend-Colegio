let userID = 1;
function getUserID() {

    return userID;
}

let username = "Senith Uthsara";
function  getUsername() {

    return username;
}
let userProfileImage = "../static/img/components_images/pro.png";
function getUserProfileImage(){

    return userProfileImage;
}

let socketsStartedBefore = false;
function isSocketsStartedBefore(){
    return socketsStartedBefore;
}

let userType = 0;
function getUserType(){

    return userType;
}

let temporary_data;

let commentSocket;

//notification socket
let notificationWebSocket;

//question chat socket
let questionCHat;



//increase count function
let increaseNotificationCount;



//custom events
let titleChanged = new CustomEvent('titleChanged', {dataValue: ""});
let descriptionChanged = new CustomEvent('descriptionChanged', {dataValue: ""});

//helper functions
const numberCount = (str) => {
    let count = 0;
    for(let i of str){
        if(!isNaN(Number(i))){
            count++;
        }
    }
    return count;
}


let resp = {
    "isError" : true,
    "message" : ""
};
//functions
const validateConfirmPassword = (password, cpassword) => {
    if (password.value !== cpassword.value) {
        resp["message"] = "Password and the confirm password do not match";
        let popup = document.querySelector(".popup-content");
        document.querySelector(".popup-container").style.display = "flex";
        popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${resp["message"]}</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

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

const validatePasswordLength = (password) => {

    if (password.value.length <8){
        resp["message"]  = "Password must have atleast 8 characters";
        let popup = document.querySelector(".popup-content");
        document.querySelector(".popup-container").style.display = "flex";
        popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${resp["message"]}</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

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

const validateNumberLength = (password) => {
    if (numberCount(password.value)<1){
        resp["message"] = "Password must have atleast one digit";
        let popup = document.querySelector(".popup-content");
        document.querySelector(".popup-container").style.display = "flex";
        popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${resp["message"]}</h2>
                        <button class="btn btn-special fnt fnt-mid fnt-bold" id="ok-btn">OK</button>

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

const validatePassword = (password, cpassword) => {

    if (validateConfirmPassword(password, cpassword) && validatePasswordLength(password) && validateNumberLength(password) ){

        return true;
    }
    else{

        return false;
    }

}