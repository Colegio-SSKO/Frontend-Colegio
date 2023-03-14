alert("Hello this ssss");

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    let res = await fetch("http://localhost:8080/api/users/myQuestions/:"+getUserID(), {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};




//function to render right content

function renderRight(data) {

    let html_right = "";

    if (data["status"]== 1){
        html_right += ` <open-question  img_src="${i["question_img"]}" qualifi="${data[""]}" title="${i["question_title"]}" author="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></open-question>`;

    }
    else if (data["status"]== 0) {
        html_right += ` <question  img_src2="${i["question_img"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept_person="${i["f_name"]+" "+ i["l_name"]}"  description="${i["question_description"]}""></question>`;

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
            if (i["status"]== 0){
                html_left += ` <q-1 question_ID="${i["question_Id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-1>`;
            }else if (i["status"]== 1){
                html_left += ` <q-2 question_ID="${i["question_Id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-2>`;
            }
            else {
                alert("kkkkkkkk")
                html_left += ` <q-4 question_ID="${i["question_Id"]}" img_src="${i["question_img"]}" title="${i["question_title"]}" accept="${i["f_name"]+" "+ i["l_name"]}" description="${i["question_description"]}""></q-4>`;
            }
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected_session = document.querySelectorAll(".js-session");

        for (let element of selected_session){
            element.addEventListener('click', ()=>{

                for (let el of data){
                    if (el["content_ID"] == element.getAttribute("id")){
                        renderRight(el);
                    }
                }
            })
        }

        let selected_question= document.querySelectorAll(".js-question");

        for (let element of selected_question){
            element.addEventListener('click', ()=>{

                for (let el of data){
                    if (el["content_ID"] == element.getAttribute("id")){
                        renderRight(el);
                    }
                }
            })
        }



    });





}
