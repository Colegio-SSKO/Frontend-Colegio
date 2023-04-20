alert("dddd1");

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    let res = await fetch("http://localhost:8090/api/users/myQuestions/:"+getUserID(), {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};


let tocheck="";

//function to render right content

function renderRight(data, tocheck ) {

    let html_right = "";

    alert(data["status"])
    if (tocheck== 0){
        alert("kabmmm")
        html_right = ` <open-question  img_src="${data["pro_pic"]}" qulifi="${data["qulification_level"]}" title="${data["question_title"]}"  author="${data["f_name"]+" "+ data["l_name"]}" description="${data["question_description"]}""></open-question>`;
    }
    else {
        alert("asd")
        html_right = ` <open-question-question img_src2="${data["pro_pic"]}" img_src="${data["question_img"]}" quli="${data["qulification_level"]}" title="${data["question_title"]}" accept="${data["f_name"]+" "+ data["l_name"]}"  description="${data["question_description"]}" question_ID="${data["question.question_id"]}"></open-question-question>`;

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
            alert(i["question.status"])
            if (i["question.status"]== 0){ /**/
                html_left += ` <q-4 question_ID="${i["question.question_id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-4>`;
            }else if (i["question.status"]== 1){
                html_left += ` <q-1 question_ID="${i["question.question_id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-1>`;
            }
            else {
                html_left += ` <q-2 question_ID="${i["question.question_id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-2>`;
            }
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected_session = document.querySelectorAll(".js-session");

        for (let element of selected_session){
            element.addEventListener('click', ()=>{
                alert(data);
                for (let el of data){
                    if (el["question.question_id"] == element.getAttribute("id")){
                        renderRight(el,0);
                    }
                }
            })
        }

        let selected_question= document.querySelectorAll(".js-question");

        for (let element of selected_question){
            element.addEventListener('click', ()=>{

                for (let el of data){
                    if (el["question.question_id"] == element.getAttribute("id")){
                        renderRight(el,1);
                    }
                }
            })
        }



    });





}
