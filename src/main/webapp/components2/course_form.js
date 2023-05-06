class CourseForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <form>
            <div class="course_form">
                <h3 class="fnt fnt-bold fnt-large">Lets create your Course</h3><br>
                <div class="inputs">
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Select a unique title for your Course.</label><br>
                        <input id="js-course-upload-title" type="text" class="fnt fnt-mid fnt-light" required placeholder="Course Title">
                    </div><br><br>
    
                    <div class="input-field">
                        <p for="" class="fnt fnt-mid fnt-bold">Select the most appropriate category for your course.</p><br>
                        <select id="js-course-upload-subject" class="fnt-bold fnt fnt-mid">
                            <option class="fnt-bold fnt fnt-mid" value="Science">Science</option>
                            <option class="fnt-bold fnt fnt-mid" value="Mathematics">Mathematics</option>
                            <option class="fnt-bold fnt fnt-mid" value="English">English</option>
                        </select>
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Give your course a good description.</label><br>
                        <textarea id="js-course-upload-description" class="fnt fnt-mid fnt-light description_box" name="description_box" rows="7" cols="40" placeholder="Enter course description here"></textarea>
                    </div><br><br>
                    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Price (In LKR).</label><br>
                        <input id="js-course-upload-price" type="text" class="fnt fnt-mid fnt-light" required placeholder="Price for the course">
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Course Thumbnail image
                            <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                    </div>
    
                    <input type="file" id="js-course-upload-thumbnail-upload" class=" myFile fnt fnt-light fnt-mid" name="thumbnail"><br>
                    <div class="upload_pic"></div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Course Content Sections <br>
                            <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid fnt-light">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
                        </label>
    
                        <div class="video-upload-wrapper-container">
                           <div id="video-upload-wrapper1" class="video-upload-wrapper">
                                <input type="text" name="video-title" class="video-upload-container-title-box" placeholder="Title">
                                <input type="text" name="video-description" class="video-upload-container-description-box" placeholder="Description">
                                <i id="js-video-upload-icon" class="material-icons">video_file</i>
                                <input class="js-course-video-uploader" style="display: none;" type="file" name="videoupload">
                                <i class="material-icons">delete</i>
                                
                            </div>
                        </div>
                        <i id="js-video-upload-container-add-btn" class="material-icons">add_box</i><br>
                    </div>
                    
<!--                    remove this lator-->
                    <button id="js-course-upload-submit-button" class="btn btn-solid btn-large">Create Course</button>
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
                       <input type="text" name="video-title" class="video-upload-container-title-box" placeholder="Title">
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



        createCourse.addEventListener('click', async (event)=>{
            event.preventDefault();

            alert("meka tm create course")
            //thumbnail
            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

            //videos
            courseVideoUploads = document.querySelectorAll(".js-course-video-uploader");
            courseVideoUploads.forEach((video)=>{

                formData.append('videoFiles', video.files[0]);
            })


            //send save files request
            let fileUploadresponse =await fetch('http://localhost:8080/api/createCourse/', {method : "POST", body:formData})
                .then((res)=>{
                    return res.json();
                })
            console.log(fileUploadresponse)

            if(!fileUploadresponse["isError"]){
                alert("Upload una");
                //handle text data submission here
                //textData
                let courseTitle = document.querySelector("#js-course-upload-title");
                let courseSubject = document.querySelector("#js-course-upload-subject");
                let courseDescription = document.querySelector("#js-course-upload-description");
                let coursePrice = document.querySelector("#js-course-upload-price");
                let videoTitles = document.querySelectorAll(".video-upload-container-title-box");
                let videoDescription = document.querySelectorAll(".video-upload-container-description-box");

                let videoTitleData = new Array(0);;

                let videoNumber = 0;
                videoTitles.forEach((title)=>{
                    videoTitleData[videoNumber] = title.value;
                    videoNumber ++;
                })

                let videoDescriptionData = new Array(0);;

                videoNumber = 0;
                videoDescription.forEach((description)=>{
                    videoDescriptionData[videoNumber] = description.value;
                    videoNumber ++;
                })

                console.log(videoTitleData)
                console.log(fileUploadresponse["thumbnail"])

                let textData = {

                    "userId" : getUserID(),
                    "courseTitle" : courseTitle.value,
                    "courseSubject" : 10,
                    "courseDescription" : courseDescription.value,
                    "coursePrice" : coursePrice.value,
                    "videoTitles" : videoTitleData,
                    "videoDescriptions" : videoDescriptionData,
                    "thumbnailPath" : fileUploadresponse["thumbnail"],
                    "videoPaths" : fileUploadresponse["videos"]
                }
                console.log(textData)
                console.log("hehe")

                //send save data to the db request to the backend
                let textUploadresponse = await fetch('http://localhost:8090/api/teachers/createCourse/', {
                    method : "POST",
                    body:JSON.stringify(textData),
                    credentials : "include"
                })
                    .then((res)=>{
                        return res.json()
                    })

                if(!textUploadresponse["isError"]){
                    alert("Upload una");
                }
                else{
                    alert("error ekak oi")
                }

            }
            else{
                alert("error ekak oi")
            }








            formData.append('textData', JSON.stringify(textData));



        })


    }
}

customElements.define('course-form', CourseForm);