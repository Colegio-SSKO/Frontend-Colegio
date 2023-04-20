class CourseForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <form>
            <div class="course_form">
                <h3 class="fnt fnt-bold fnt-large">Lets create your Course</h3><br>
                <div class="inputs">
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Select a unique title for your Course.</label><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Course Title">
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Select the most appropriate category for your course.</label><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Mathematics/ Science/ English...">
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Give your course a good description.</label><br><br>
                        <textarea class="fnt fnt-mid fnt-light description_box" name="description_box" rows="7" cols="40" placeholder="Enter course description here"></textarea>
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Course Thumbnail image
                            <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                    </div>
    
                    <input type="file" id="js-course-upload-thumbnail-upload" class=" myFile fnt fnt-light fnt-mid" name="thumbnail"><br><br>
    
                    <div class="upload_pic"></div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Course Content Sections <br>
                            <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid fnt-light">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
                        </label>
    
                        <div class="video-upload-wrapper-container">
                           <div id="video-upload-wrapper1" class="video-upload-wrapper">
                                <h3>Title</h3>
                                <i class="material-icons">edit</i>
                                <input type="text" name="video-description" class="video-upload-container-description-box" placeholder="Description">
                                <i id="js-video-upload-icon" class="material-icons">video_file</i>
                                <input class="js-course-video-uploader" style="display: none;" type="file" name="videoupload">
                                <i class="material-icons">delete</i>
                                
                            </div>
                        </div>
                        <i id="js-video-upload-container-add-btn" class="material-icons">add_box</i>
                    </div>
                    
<!--                    remove this lator-->
                    <button id="js-course-upload-submit-button" class="btn btn-outlined btn-large">Create Course</button>
                </div>
            </div>
    </form>
        `;


        //setting event listener for the video upload icon of first wrapper
        document.querySelector(`#video-upload-wrapper1 #js-video-upload-icon`).addEventListener('click',(event)=>{
            alert(event.target.parentElement.id);
            document.querySelector(`#${event.target.parentElement.id} .js-course-video-uploader`).click();
        })

        let wrapperCount = 1;
        let addVideoButton = document.querySelector("#js-video-upload-container-add-btn");

        //add more video button

        addVideoButton.addEventListener('click', ()=>{
            wrapperCount ++;
            let newVideoWrapper = document.createElement("div");
            newVideoWrapper.classList.add("video-upload-wrapper");
            newVideoWrapper.id = `video-upload-wrapper${wrapperCount}`;
            newVideoWrapper.innerHTML = `
                       <h3>Title</h3>
                       <i class="material-icons">edit</i>
                       <input type="text" name="video-description" class="video-upload-container-description-box" placeholder="Description">
                       <i id="js-video-upload-icon" class="material-icons">video_file</i>
                       <input class="js-course-video-uploader" style="display: none;" type="file" name="videoupload">
                       <i class="material-icons">delete</i>
        `;
            document.querySelector(".video-upload-wrapper-container").appendChild(newVideoWrapper);
            document.querySelector(`#video-upload-wrapper${wrapperCount} #js-video-upload-icon`).addEventListener('click',(event)=>{
                alert(event.target.parentElement.id);
                document.querySelector(`#${event.target.parentElement.id} .js-course-video-uploader`).click();
            })
        })


        //handling upload
        let createCourse = document.querySelector("#js-course-upload-submit-button");
        let thumbnailUpload = document.querySelector("#js-course-upload-thumbnail-upload");
        let courseVideoUploads;



        createCourse.addEventListener('click', (event)=>{
            event.preventDefault();

            //thumbnail
            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

            //videos
            courseVideoUploads = document.querySelectorAll(".js-course-video-uploader");
            courseVideoUploads.forEach((video)=>{

                formData.append('videoFiles', video.files[0]);
            })



            //send the request
            let uploadresponse = fetch('http://localhost:8090/api/createCourse', {method : "POST", body:formData})
                .then((res)=>{
                    return res
                })

            if(uploadresponse.ok){
                alert("Upload una");
            }
            else{
                alert("error ekak oi")
            }
        })


    }
}

customElements.define('course-form', CourseForm);