

// import {myVar} from '../../components2/small-listed';

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    const res2 = await fetch("http://localhost:8090/api/users/small_card_open/:" + temporary_data, {method: "GET", credentials:"include"}).then((response) => response.json());

    return res2;



};






function renderRight(data2,data, type) {



    let html_right = "";

    if (type== 0){

        html_right += `<pop-up></pop-up> <small-cardright  title="${data["title"]}" purchase_count="${data["purchase_count"]}" description="${data["description"]}" author="${data["f_name"]} ${data["l_name"]}" price="${data["price"]}" date="${data["date"]}" content_id="${data["content_id"]}" rate_count="${data["rate_count"]}" ></small-cardright>`;

        for (let i of data2){
            html_right += `<description-head heading="${i["meida_title"]}" content="${i["media_description"]}" course_media_id="${i["course_media_id"]}"></description-head>`;
        }
    }
    else {

        html_right += `<pop-up></pop-up> <small-cardquiz  time="${data2["duration"]}" q_number="${data2["quiz_q_number"]}" title="${data2["title"]}"  purchase_count="${data2["purchase_count"]}" description="${data2["description"]}" author="${data2["f_name"]} ${data2["l_name"]}" price="${data2["price"]}" date="${data2["date"]}" content_id="${data2["content_id"]}" rate_count="${data2["rate_count"]}" ></small-cardquiz>`;


    }
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {

    fetchData().then(async (data) => {



        let html_left = `<pop-up></pop-up> <small-cardopen img_src="${data["image"]}" purchase_count="${data["purchase_count"]}" title="${data["title"]}" description="${data["description"]}" author="${data["f_name"]} ${data["l_name"]}" price="${data["price"]}" date="${data["date"]}" content_id="${data["content_id"]}" rate_count="${data["rate_count"]}" ></small-cardopen>`;

        document.querySelector(".cont-body-left").innerHTML = html_left;

        if (data["content.type"]==0){
            const res4 = await fetch("http://localhost:8090/api/users/get_content_media/:" + temporary_data, {method: "GET", credentials:"include"}).then((response) => response.json());
            renderRight(res4,data,0);
        }
        else{
            const res5 = await fetch("http://localhost:8090/api/users/get_content_media_quiz/:" + temporary_data, {method: "GET", credentials:"include"}).then((response) => response.json());

            renderRight(res5,data,1);
        }





    });





}
