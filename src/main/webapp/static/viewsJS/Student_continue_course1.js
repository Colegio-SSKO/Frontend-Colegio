

async function fetchData(){


    let url = "http://localhost:8090/api/users/continue_course/:"+ temporary_data;
    let res = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );

    return res;
};

//function to render right content

function renderRight(data) {

    let html_right = "";


    html_right += `
    <follow-course author_pic = "${data["pro_pic"]}" media="${data['course_media_id']['media']}" title="${data['course_media_id']['meida_title']}" description="${data['course_media_id']['media_description']}" author="${data["f_name"] + " " +data["l_name"]}" author_title="${data["qulification_level"]}" ></follow-course>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";



        for (let i of data){
            html_left += `<description-head heading="${i['course_media_id']['meida_title']}" content="${i['course_media_id']['media_description']}" course_media_id="${i['course_media_id']['course_media_id']}"></description-head>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".desc-head-wrap");

        for (let element of selected){
            element.addEventListener('click', ()=>{

                for (let el of data){

                    if (el['course_media_id']['course_media_id'] == element.getAttribute("id")){

                        renderRight(el);
                    }
                }
            })
        }



    });





}
