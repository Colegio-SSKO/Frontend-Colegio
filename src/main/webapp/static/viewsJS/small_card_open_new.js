alert("miyaawww");

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    const res2 = await fetch("http://localhost:8090/api/users/small_card_open/:" + temporary_data, {method: "GET"}).then((response) => response.json());
    alert("res2 awa "+res2)
    return res2;



};

renderLeft();


//function to render right content

// function renderRight(data, type) {
//
//     let html_right = "";
//
//     alert(data["status"])
//     if (type== 1){
//         alert("kabmmm")
//         html_right = ` <open-question img_src="${data["pro_pic"]}" qulifi="${data["qulification_level"]}" title="${data["question_title"]}"  author="${data["f_name"]+" "+ data["l_name"]}" description="${data["question_description"]}" author_ID="${data["question.accept_teacher_id"]}""></open-question>`;
//     }
//     else {
//         alert("asd")
//         html_right = ` <open-question-question media="${data["question_img"]}" author_propic="${data["pro_pic"]}" title="${data["question_title"]}" author="${data["f_name"]+" "+ data["l_name"]}"  description="${data["question_description"]}" qulifi="${data["qulification_level"]}""></open-question-question>`;
//
//     }
//     document.querySelector(".cont-body-right").innerHTML = html_right;
//
//
//
// }
//




//rendering the left content
function renderLeft() {

    alert("render left awa")
    fetchData().then(async (data) => {
    alert("fetch ekatat awa")
        try {
            let data = await fetchData();
            alert("try  eka weda");


            const res3 = await fetch("http://localhost:8090/api/users/small_card_open_comment/:" + temporary_data, {method: "GET"}).then((response) => response.json());
            alert("deweni api eka res3 " + res3)
            return res3;

            let html_left = `<pop-up></pop-up> <small-cardopen img_src="${data["introduction_media"]}" title="${data["course_title"]}" description="${data["decription"]}" author="${data["f_name"]}+${data["l_name"]}" price="${data["price"]}" date="${data["date"]}" content_id="${data["content_id"]}" ></small-cardopen><comment-list dataString="${encodeURIComponent(res3)}"> </comment-list>`;

            document.querySelector(".cont-body-content").innerHTML = html_left;

        } catch (error) {
            console.error(error);
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

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


    });





}
