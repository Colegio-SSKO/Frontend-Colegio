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
    
                    <input type="file" class="myFile fnt fnt-light fnt-mid" name="filename"><br><br>
    
                    <div class="upload_pic"></div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Course Content Sections <br>
                            <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid fnt-light">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
                        </label>
    
                        <div class="video-upload-wrapper-container">
                            <div id="video-upload-wrapper1" class="video-upload-wrapper">
                                <h3>Title</h3>
                                <i class="material-icons">e3c9</i>
                                <input type="text" name="video-description" class="video-upload-container-description-box" placeholder="Description">
                                <i class="material-icons">video_file</i>
                                <i class="material-icons">delete</i>
                                
                            </div>
                        </div>
                        <i id="js-video-upload-container-add-btn" class="material-icons">add_box</i>
                    </div>
                </div>
            </div>
    </form>
        `;

        let wrapperCount = 1;
        let addVideoButton = document.querySelector("#js-video-upload-container-add-btn");

        addVideoButton.addEventListener('click', ()=>{
            wrapperCount ++;
            document.querySelector(".video-upload-wrapper-container").innerHTML += `
            <div id="video-upload-wrapper${wrapperCount}" class="video-upload-wrapper">
                <h3>Title</h3>
                <i class="material-icons">edit</i>
                <input type="text" name="video-description" class="video-upload-container-description-box" placeholder="Description">
                <i class="material-icons">video_file</i>
                <i class="material-icons">delete</i>
            </div>
            `;
        })
    }
}

customElements.define('course-form', CourseForm);