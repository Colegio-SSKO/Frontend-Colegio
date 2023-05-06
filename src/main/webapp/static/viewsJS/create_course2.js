alert("Hel222");

async function fetchData() {
    let req = "";
    return req;
};


//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
<open-course img_src="${data["content_image"]}" title="${data["course_title"]}" description="${data["description"]}" author="${data["f_name"] + " " +data["l_name"]}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";

        html_left += `
            <course-form></course-form>
        `;


        document.querySelector(".cont-body-left").innerHTML = html_left;


    });





}
