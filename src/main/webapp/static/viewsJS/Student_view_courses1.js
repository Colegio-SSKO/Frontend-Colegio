

async function fetchData(){


//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/myCources/:"+ getUserID(), {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
    <open-course author_pic = "${data["pro_pic"]}" img_src="${data["image"]}" title="${data["title"]}" description="${data["description"]}" author="${data["f_name"] + " " +data["l_name"]}" author_title="${data["qulification_level"]}" course_id="${data["course_id"]}" content_id="${data["content_id"]}" rates_count="${data["rate_count"]}"></open-course>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;






}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";

        html_left += "" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a btn-small is-a-route\">All</button></a>\n" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a btn-small is-a-route\">Continuing</button></a>\n" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a btn-small is-a-route\">Completed</button></a><br>\n" +
            "\n" +
            "";


        for (let i of data){
            html_left += ` <pop-up></pop-up><listed-content content_ID="${i["content_id"]}" img_src="${i["image"]}" title="${i["title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["description"]}" rates="${i["rate_count"]}" ></listed-content>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        for (let element of selected){
            element.addEventListener('click', ()=>{

                for (let el of data){

                    if (el["content_id"] == element.getAttribute("id")){

                        renderRight(el);
                    }
                }
            })
        }



    });


}