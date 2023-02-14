
alert("Hello");

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    // let res = await fetch("http://localhost:8081/api/getUserCourses", {method : "POST",  body : JSON.stringify(req)}).then((response)=>
    //     response.json()
    //
    // );


    //delete this. this one will return a dummy data to test
    let res = [
        {
            "question_ID" : 1,
            "img_src" : "/null",
            "title" : "Electronics circuits for GCE OLs English Medium",
            "accept" : "Accepted by Ravin Silva",
            "img_src2" : "/null",
            "description" : " Help with the 2016 OL electronics question through a zoom session."


        },


        {
            "question_ID" : 2,
            "img_src" : "../static/img/Rectangle_231.png",
            "title" : "Basic algebra grade 9 help",
            "accept" : "Accepted by Ranil Perera",
            "img_src2" : "/null",
            "description" : "Can you help me with understanding basic algebra for grade 9, A step by step answer for the attached question with an explanation."


        }
    ]

    return res
};


//function to render right content
function renderRight(data) {

    let html_right = "";
    html_right += `
    <q-question img_src2="${data["img_src2"]}" title="${data["title"]}" description="${data["description"]}" img_src="${data["img_src"]}" accept_person="${data["accept_person"]}"></q-question>
    `;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}




//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";

        html_left += "" +
           "<button class=\"btn btn-solid btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">All</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Answered</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Pending</a></button>\n" +
            "<button class=\"btn btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"/publish_question\">Publish Question</a></button>\n" +
            "<button class=\"btn btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"/session_request\">Request Session</a></button><br><br>"
            "";


        for (let i of data) {
            if (i["img_src"] == "/null")
                html_left += ` <q-2 question_ID="${i["question_ID"]}" img_src="${i["img_src"]}" title="${i["title"]}" accept="${i["accept"]}" description="${i["description"]}"></q-2>`;
            else
                html_left += ` <q-1 question_ID="${i["question_ID"]}" img_src="${i["img_src"]}" title="${i["title"]}" accept="${i["accept"]}" description="${i["description"]}"></q-1>`;


            document.querySelector(".cont-body-left").innerHTML = html_left;
        }

        let selected = document.querySelectorAll(".js-questionCards");

        for (let element of selected){
            element.addEventListener('click', ()=>{

                for (let el of data){
                    if (el["question_ID"] == element.getAttribute("id")){

                        renderRight(el);
                    }
                }
            })
        }






    });





}
