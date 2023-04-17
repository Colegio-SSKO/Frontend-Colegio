alert("Heliidd");

async function fetchData() {
    let res = await fetch("http://localhost:8090/api/users/myQuizes/:1", {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

function renderRight(data) {
    alert("runn")
    let html_right = "";

    html_right += `
<quiz-question title="${data["quiz_title"]}" Question="${data["question"]}" answer1="${data["op1"]}" answer2="${data["op2"]}" answer3="${data["op3"]}" answer4="${data["op4"]}" ></quiz-question>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";
        alert(data);
        html_left += "" +
            "<button class=\"btn btn-solid btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">All</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Continuing</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Completed</a></button><br><br>\n" +
            "\n" +
            "";


        for (let i of data){
            html_left += ` <listed-content content_ID="${i["content_id"]}" img_src="${i["media"]}" title="${i["quiz_title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["description"]}" rating=\"5\" votes=\"102\"></listed-content>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        for (let element of selected){
            element.addEventListener('click', (ev)=>{
                for (let el of data){
                    if (el["content_id"] == element.getAttribute("id")){
                        // renderRight(el);
                        quizcard(el);
                    }
                }
            })
        }



    });





}



//display the main quiz card

function quizcard(element){

    alert("runn")
    let html_right = "";

    html_right = `<start-quiz quiz_id="${element["content_id"]}" img_src="/new" title="${element["quiz_title"]}" description=${element["description"]} author=${element["f_name"] + " " + element["l_name"]} author_title=${element["qulification_level"]}></start-quiz>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;

    document.querySelector(".js-startquiz-start-btn").addEventListener('click', ()=>{
        renderRight(element);
    })
}