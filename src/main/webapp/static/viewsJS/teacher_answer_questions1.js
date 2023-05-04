alert("Heiya24");

async function fetchData() {


    alert("api call wenw 5")
    let res = await fetch("http://localhost:8090/api/teachers/answer_questions/", {
        method : "GET",
        credentials : "include"
    }).then((response)=>{
        alert("athule wed")
            alert(JSON.stringify(response));
            return response.json()
    }


    );

    alert(JSON.stringify(res))
    return res
};




//function to render right content

function renderRight(data, type) {

    let html_right = "";

    if (type== 1){
        alert("kabmmm")
        html_right = ` <open-question img_src="${data["pro_pic"]}" qulifi="${data["qulification_level"]}" title="${data["question_title"]}"  author="${data["f_name"]+" "+ data["l_name"]}" description="${data["question_description"]}" author_ID="${data["question.user_id"]}" questionId="${data["question.question_id"]}""></open-question>`;
    }
    else {
        alert("asd")
        html_right = ` <send-answers media="${data["question_img"]}" author_propic="${data["pro_pic"]}" title="${data["question_title"]}" author="${data["f_name"]+" "+ data["l_name"]}"  description="${data["question_description"]}" qulifi="${data["qulification_level"]}""></send-answers>`;

    }
    document.querySelector(".cont-body-right").innerHTML = html_right;



}






//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";

        html_left += "" +
            "<button class=\"btn btn-solid btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">All</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Continuing</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Completed</a></button><br><br>\n" +
            "\n" +
            "";
        for (let i of data){
            if (i["question.status"]== 1){

                html_left += ` <ans-q1 question_ID="${i["question.question_id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}"></ans-q1>`;
            }else if (i["question.status"]== 2){
                html_left += ` <ans-q2 question_ID="${i["question.question_id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}"></ans-q2>`;
            }
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;
        let selected_session = document.querySelectorAll(".js-session");

        let clicked_data;
        let targetId;
        let buttonID;

        selected_session.forEach((session)=>{
            session.addEventListener('click', (event)=>{
                targetId = event.target.id.split("-");
                buttonID = targetId[targetId.length-1];

                clicked_data = data.find((value)=>value["question.question_id"] == buttonID )
                console.log(clicked_data);
                renderRight(clicked_data, 1); //1 for session 0 for question
            })
        })

        let selected_question= document.querySelectorAll(".js-question");
        selected_question.forEach((quession)=>{
            quession.addEventListener('click', (event)=>{
                targetId = event.target.id.split("-");
                buttonID = targetId[targetId.length-1];

                clicked_data = data.find((value)=>value["question.question_id"] == buttonID )
                console.log(clicked_data);
                renderRight(clicked_data, 0); //1 for session 0 for question
            })
        })




    });





}
