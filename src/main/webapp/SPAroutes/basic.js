function getUserID() {
    let userID = 1;
    return userID;
}

function  getUsername() {
    let username = "Senith Uthsara";
    return username;
}

function getUserProfileImage(){
    let userProfileImage = "../static/img/components_images/pro.png";
    return userProfileImage;
}

let temporary_data;

const quizCommentSocket = new WebSocket('ws://localhost:8090/quizCommentsHandler');