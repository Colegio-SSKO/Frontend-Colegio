alert("mil23");

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






function renderRight(data) {

    let html_right = "";

    // if (type== 0){
        for (let i of data){
            html_right += `<description-head heading="${i["meida_title"]}" content="${i["media_description"]}" course_media_id="${i["course_media_id"]}"></description-head>`;
        }
    // }
    // else {
    //     alert("asd")
    //     html_right = ` <open-question-question media="${data["question_img"]}" author_propic="${data["pro_pic"]}" title="${data["question_title"]}" author="${data["f_name"]+" "+ data["l_name"]}"  description="${data["question_description"]}" qulifi="${data["qulification_level"]}""></open-question-question>`;
    //
    // }
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {

    alert("render left awa")
    fetchData().then(async (data) => {
    alert("fetch ekatat awa")

            alert("try  eka weda");


            const res3 = await fetch("http://localhost:8090/api/users/small_card_open_comment/:" + temporary_data, {method: "GET"}).then((response) => response.text());
            alert("deweni api eka res3 " + res3)

            let html_left = `<pop-up></pop-up> <small-cardopen img_src="${data["introduction_media"]}" title="${data["course_title"]}" description="${data["decription"]}" author="${data["f_name"]}+' '+ ${data["l_name"]}" price="${data["price"]}" date="${data["date"]}" content_id="${data["content_id"]}" rate_count="${data["rate_count"]}" ></small-cardopen><comment-list dataString="${encodeURIComponent(res3)}"> </comment-list>`;
            alert(html_left)
            document.querySelector(".cont-body-left").innerHTML = html_left;


        // document.querySelector(".cont-body-left").innerHTML = html_left;
        //
        // let selected_session = document.querySelectorAll(".js-session");
        //
        //
        // let clicked_data;
        // let targetId;
        // let buttonID;
        //
        // selected_session.forEach((session) => {
        //     session.addEventListener('click', (event) => {
        //         targetId = event.target.id.split("-");
        //         buttonID = targetId[targetId.length - 1];
        //
        //         clicked_data = data.find((value) => value["question.question_id"] == buttonID)
        //         console.log(clicked_data);
        //         renderRight(clicked_data, 1); //1 for session 0 for question
        //     })
        // })

        const res4 = await fetch("http://localhost:8090/api/users/continue_course/:" + temporary_data, {method: "GET"}).then((response) => response.json());


        renderRight(res4);

    });





}
