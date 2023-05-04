alert("view_course_media131");

async function fetchData(){

    alert(temporary_data)
    alert("sew");
    let url = "http://localhost:8090/api/users/continue_course/:"+ temporary_data;
    let res = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );
    alert(JSON.stringify(res));
    return res;
};

//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
    <follow-course author_pic = "${data["pro_pic"]}" media="${data["media"]}" title="${data["meida_title"]}" description="${data["media_description"]}" author="${data["f_name"] + " " +data["l_name"]}" author_title="${data["qulification_level"]}" ></follow-course>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";



        alert(JSON.stringify(data));
        for (let i of data){
            html_left += `<description-head heading="${i["meida_title"]}" content="${i["media_description"]}" course_media_id="${i["course_media_id"]}"></description-head>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".desc-head-wrap");

        for (let element of selected){
            element.addEventListener('click', ()=>{
                alert("clicked");
                for (let el of data){

                    if (el["course_media_id"] == element.getAttribute("id")){

                        renderRight(el);
                    }
                }
            })
        }



    });





}
