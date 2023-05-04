alert("mil23456");

// import {myVar} from '../../components2/small-listed';

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    const res2 = await fetch("http://localhost:8090/api/users/small_card_open/:" + temporary_data, {method: "GET"}).then((response) => response.json());
    alert("res2 awa "+res2)
    return res2;



};






function renderRight(data, type) {

    alert("render right awa");

    let html_right = "";

    if (type== 0){
        for (let i of data){
            html_right += `<description-head heading="${i["meida_title"]}" content="${i["media_description"]}" course_media_id="${i["course_media_id"]}"></description-head>`;
        }
    }
    else {
        html_right+= `<div class="fnt fnt-bold fnt-large">Meka Quizz ekk</div>`

    }
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {

    fetchData().then(async (data) => {

        const res3 = await fetch("http://localhost:8090/api/users/small_card_open_comment/:" + temporary_data, {method: "GET"}).then((response) => response.text());


        let html_left = `<pop-up></pop-up> <small-cardopen img_src="${data["introduction_media"]}" title="${data["course_title"]}" description="${data["decription"]}" author="${data["f_name"]}+' '+ ${data["l_name"]}" price="${data["price"]}" date="${data["date"]}" content_id="${data["content_id"]}" rate_count="${data["rate_count"]}" ></small-cardopen><comment-list dataString="${encodeURIComponent(res3)}"> </comment-list>`;

        document.querySelector(".cont-body-left").innerHTML = html_left;

        if (data["content.type"]==0){
            const res4 = await fetch("http://localhost:8090/api/users/continue_course/:" + temporary_data, {method: "GET"}).then((response) => response.json());
            renderRight(res4,0);
        }
        else{
            renderRight(0,1);
        }





    });





}
