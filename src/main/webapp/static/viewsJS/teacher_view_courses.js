alert("Hello cc5a1");

async function fetchData(){


//uncomment this when connecting the database
    alert("tech");
    let res = await fetch("http://localhost:8090/api/users/myCources/:"+ getUserID(), {
        method : "GET",
        credentials: "include"}
    ).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
    <open-course author_pic = "${data["pro_pic"]}" img_src="${data["introduction_media"]}" title="${data["course_title"]}" description="${data["decription"]}" author="${data["f_name"] + " " +data["l_name"]}" author_title="${data["qulification_level"]}" course_id="${data["course_id"]}" content_id="${data["content_id"]}" rates_count="${data["rate_count"]}"></open-course>`;
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
            "<button class=\"btn btn-outlined btn-large js-createCourseButton\"><a class=\"fnt fnt-bold fnt-mid\" href=\"/create_course\">Create Course</a></button>" +

            "\n" +
            "";


        for (let i of data){
            html_left += `  <pop-up></pop-up><listed-content content_ID="${i["content_id"]}" img_src="${i["introduction_media"]}" title="${i["course_title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["decription"]}" rating=\"5\" votes=\"102\"></listed-content>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        for (let element of selected){
            element.addEventListener('click', ()=>{
                alert("clicked");
                for (let el of data){

                    if (el["content_id"] == element.getAttribute("id")){

                        renderRight(el);
                    }
                }
            })
        }



    });


}