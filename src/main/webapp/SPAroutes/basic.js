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

let userType = 0;
function getUserType(){

    return userType;
}

let temporary_data;

const quizCommentSocket = new WebSocket('ws://localhost:8090/quizCommentsHandler');

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
        return false
    }
    else{
        return true;
    }

}

const validatePasswordLength = (password) => {

    if (password.value.length <8){
        resp["message"]  = "Password must have atleast 8 characters";
        return false;
    }
    else
        return true;
}

const validateNumberLength = (password) => {
    if (numberCount(password.value)<1){
        resp["message"] = "Password must have atleast one digit";
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
        alert(resp["message"]);
        return false;
    }

}