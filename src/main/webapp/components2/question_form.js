class Question_form extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <form>
            <div class="question_form">
                <h3 class="fnt fnt-bold fnt-large">Lets publish your question</h3><br>
                <div class="inputs">
                    <div class="input-field fnt fnt-light fnt-mid">
                        <label for="" class="fnt fnt-bold fnt-mid">Enter an appropriate title for your question.</label><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Question Title">
                    </div><br><br>
        
        
                    <div class="input-field">
                        <label for="" class="fnt fnt-bold fnt-mid">Enter your question, describe what you want.</label><br><br>
                        <textarea class="description_box fnt fnt-mid fnt-light" name="description_box" rows="7" cols="40" placeholder="Enter question description here"></textarea>
                    </div><br><br>
        
                    <div class="input-field">
                        <label for="" class="fnt fnt-bold fnt-mid">Question Image
                            <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">Upload your question image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                    </div>
        
                    <input type="file" class="myFile fnt fnt-light fnt-mid" name="filename"><br><br>
        
                    <div class="upload_pic"></div><br><br>
        
                    <quizz-quesionanswer></quizz-quesionanswer>
                    
                </div>
            </div>
        </form>
        `;
    }
}
    
customElements.define('question-form', Question_form);