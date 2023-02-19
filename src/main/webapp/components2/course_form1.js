class CourseForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="course_form">
    <h3 class="fnt fnt-bold fnt-large">Lets create your Course</h3><br>
    <div class="inputs">
        <div class="input-field">
            <label for="" class="fnt fnt-mid">Select a unique title for your Course.</label><br><br>
            <input class="js-course-title-course-form" type="text" required placeholder="Course Title">
        </div><br><br>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Select the most appropriate category for your course.</label><br><br>
            <input class="js-course-category-course-form" type="text" required placeholder="Mathematics/ Science/ English...">
        </div><br><br>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Give your course a good description.</label><br><br>
            <textarea class="description_box js-course-description-course-form" name="description_box" rows="7" cols="40" placeholder="Enter course description here"></textarea>
        </div>

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Course Thumbnail image
                <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid">your course image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
           
        </div>

        <input type="file" class="js-myFile-course-form myFile" name="filename">

        <div class="input-field">
            <label for="" class="fnt fnt-mid">Course Content Sections <br>
                <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid">Upload your course content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
            </label>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('course-form', CourseForm);