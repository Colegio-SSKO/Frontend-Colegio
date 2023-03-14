alert("Hello medagoda");

async function fetchData() {
    let res = await fetch("http://localhost:8080/api/users/myCources/:1", {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
<quiz-question img_src="${data["content_image"]}" title="${data["course_title"]}" Question="${data["question"]}" answer1="${data["f_name"]}" answer2="${data["f_name"]}" answer3="${data["f_name"]}" answer4="${data["f_name"]}" ></start-quiz>`;
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
            html_left += ` <listed-content content_ID="${i["content_ID"]}" img_src="${i["content_image"]}" title="${i["course_title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["description"]}" rating=\"5\" votes=\"102\"></listed-content>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        for (let element of selected){
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
