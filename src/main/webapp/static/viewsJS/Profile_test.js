

async function fetchData() {
    const req = {
        "user_ID" : "23"
    }

// uncomment this when connecting the database
//     let res = await fetch("http://localhost:8081/api/getUserCourses", {method : "POST",  body : JSON.stringify(req)}).then((response)=>
//         response.json()
//
//     );


    //delete this. this one will return a dummy data to test
    let res = [
        {
            "content_ID" : "1",
            "content_image" : "../static/img/components_images/elec.jpg",
            "course_title" : "This is a small title",
            "f_name" : "Senith",
            "l_name" : "Uthsara",
            "description" : "This is a dummy description"


        },

        {
            "content_ID" : "2",
            "content_image" : "../static/img/components_images/maths.jpeg",
            "course_title" : "This is a small title 2",
            "f_name" : "Kavinda",
            "l_name" : "Medagoda",
            "description" : "This is a dummy description 2"


        },

        {
            "content_ID" : "3",
            "content_image" : "../static/img/components_images/ict.jpg",
            "course_title" : "This is a small title 3",
            "f_name" : "Sachini",
            "l_name" : "Usha",
            "description" : "This is a dummy description 3"


        }
    ]

    return res
};


//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
       
        <open-course img_src="${data["content_image"]}" title="${data["course_title"]}" description="${data["description"]}" author="${data["f_name"] + " " +data["l_name"]}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>
        <br><br><center><button class="btn btn-solid btn-small"><a class="fnt fnt-bold fnt-mid" href="">Add to cart</a></button>&nbsp &nbsp &nbsp 
        <button class="btn btn-solid btn-small"><a class="fnt fnt-bold fnt-mid" href="">Buy now</a></button></center>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;
}


//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";

        html_left += `
        <button class="btn btn-solid btn-small"><a class="fnt fnt-bold fnt-mid" href="">All Courses</a></button>`;


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
