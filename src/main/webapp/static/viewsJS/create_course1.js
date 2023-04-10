alert("Hellpp");

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

        //
        let title = document.querySelector(".js-course-title-course-form");
        let description = document.querySelector(".js-course-description-course-form");
        let imageInput = document.querySelector('.js-myFile-course-form');
        title.addEventListener('input', ()=>{
            let html_right = `
                <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;


            document.querySelector(".cont-body-right").innerHTML = html_right;

        })

        description.addEventListener('input', ()=>{
            let html_right = `
                <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;


            document.querySelector(".cont-body-right").innerHTML = html_right;

        })

        imageInput.addEventListener('change', ()=>{
            let html_right = `
                <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;


            document.querySelector(".cont-body-right").innerHTML = html_right;

            //handling the uploaded thumbnail image
            let preview = document.querySelector('.open-course-image img');
            let reader = new FileReader();
            let file  = imageInput.files[0];

            reader.onloadend = () => {
                preview.src = reader.result;
            }

            if (file){
                reader.readAsDataURL(file);
            }
            else{
                preview.src = "";
            }


        })



    });





}
