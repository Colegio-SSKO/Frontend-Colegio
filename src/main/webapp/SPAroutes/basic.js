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