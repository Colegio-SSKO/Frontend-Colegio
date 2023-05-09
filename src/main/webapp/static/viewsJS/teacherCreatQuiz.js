

//function to render right content

function renderRight(data) {

    let html_right = "";

    html_right += `
<open-course img_src="${data["content_image"]}" title="${data["course_title"]}" description="${data["description"]}" author="${data["f_name"] + " " +data["l_name"]}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;



}



//rendering the left content
function renderLeft() {
        let html_left = "";

        html_left += `
            <pop-up></pop-up><quiz-form></quiz-form>
        `;
        document.querySelector(".cont-body-left").innerHTML = html_left;

        // //
        // let title = document.querySelector("#js-quiz-upload-title");
        // let description = document.querySelector("#js-quiz-upload-description");
        // let imageInput = document.querySelector('.js-myFile-course-form');
        // title.addEventListener('input', ()=>{
        //     let html_right = `
        //         <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;
        //
        //
        //     document.querySelector(".cont-body-right").innerHTML = html_right;
        //
        // })
        //
        // description.addEventListener('input', ()=>{
        //     let html_right = `
        //         <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;
        //
        //
        //     document.querySelector(".cont-body-right").innerHTML = html_right;
        //
        // })
        //
        // imageInput.addEventListener('change', ()=>{
        //     let html_right = `
        //         <open-course img_src="/null" title="${title.value}" description="${description.value}" author="${getUsername()}" heading="heading" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi." heading2="heading" content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. orrupti doloremque laudantium sequi."></open-course>`;
        //
        //
        //     document.querySelector(".cont-body-right").innerHTML = html_right;
        //
        //     //handling the uploaded thumbnail image
        //     let preview = document.querySelector('.open-course-image img');
        //     let reader = new FileReader();
        //     let file  = imageInput.files[0];
        //
        //     reader.onloadend = () => {
        //         preview.src = reader.result;
        //     }
        //
        //     if (file){
        //         reader.readAsDataURL(file);
        //     }
        //     else{
        //         preview.src = "";
        //     }
        //
        //
        // })
        //
        // let submit = document.querySelector("#submitbtn");
        // submit.addEventListener('click', ()=>{
        //
        //     let thumbnail = document.querySelector(".js-myFile-course-form").files[0];
        //     let videos = document.querySelectorAll(".js-video-files").files[0];
        //     let formData =  new FormData();
        //     let title = document.querySelector(".js-course-title-course-form").value;
        //     let category = document.querySelector(".js-course-category-course-form").value;
        //     let description = document.querySelector(".js-course-description-course-form").value;
        //
        //     let textData = {
        //         "title" : title,
        //         "category" : category,
        //         "description" : description
        //     }
        //
        //     formData.append("file", thumbnail);
        //     formData.append("textData", JSON.stringify(textData));
        //
        //     fetch("http://localhost:8100/api/teachers/createCourse", {
        //         method: 'POST',
        //         body: formData,
        //         credentials : "include"
        //     }).then(()=>{
        //     })
        // });

}
