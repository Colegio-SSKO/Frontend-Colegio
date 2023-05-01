class QuizForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <form>
            <div class="quiz_form">
                <h3 class="fnt fnt-bold fnt-large">Lets create your Quiz</h3><br>
                <div class="inputs">
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Select a unique title for your Quiz.</label><br><br>
                        <input id="js-quiz-upload-title" type="text" class="fnt fnt-mid fnt-light" required placeholder="Quiz Title">
                    </div><br><br>
    
                    <div class="input-field">
                        <p for="" class="fnt fnt-mid fnt-bold">Select the most appropriate category for your quiz.</p><br><br>
                        <select id="js-quiz-upload-subject">
                            <option value="Science">Science</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="English">English</option>
                        </select>
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Give your quiz a good description.</label><br><br>
                        <textarea id="js-quiz-upload-description" class="fnt fnt-mid fnt-light description_box" name="description_box" rows="7" cols="40" placeholder="Enter quiz description here"></textarea>
                    </div><br><br>
                    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Price (In LKR).</label><br><br>
                        <input id="js-quiz-upload-price" type="text" class="fnt fnt-mid fnt-light" required placeholder="Price for the quiz">
                    </div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Quiz Thumbnail image
                            <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">your quiz image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                    </div>
    
                    <input type="file" id="js-quiz-upload-thumbnail-upload" class=" myFile fnt fnt-light fnt-mid" name="thumbnail"><br><br>
    
                    <div class="upload_pic"></div><br><br>
    
                    <div class="input-field">
                        <label for="" class="fnt fnt-mid fnt-bold">Quiz Content Sections <br>
                            <p style="color: #767676; margin: 10px 0" class="fnt fnt-mid fnt-light">Upload your quiz content here.<br> Important Guideline : All files should be at least 480p and less than 3 GB.</p>
                        </label>
    
                        <div class="quiz-upload-wrapper-container">
                           <div id="quiz-upload-wrapper1" class="quiz-upload-wrapper">
                                <p class="fnt fnt-mid fnt-bold">Question 01</p>
                                <input type="text" name="question-description" class="question-upload-container-description-box" placeholder="Question">
                                <input id="quiz-upload-container-option-box1" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 1">
                                <input id="quiz-upload-container-option-box2" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 2">
                                <input id="quiz-upload-container-option-box3" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 3">
                                <input id="quiz-upload-container-option-box4" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 4">
                                
                                
                                <!--                                correct answerr-->
                                <p class="fnt fnt-mid fnt-bold">Correct Answer</p>
                                <select id="js-quiz-upload-answer">
                                    <option value="opt1">Option 01</option>
                                    <option value="opt2">Option 02</option>
                                    <option value="opt3">Option 03</option>
                                    <option value="opt4">Option 04</option>
                                </select>
                            </div>
                        </div>
                        <i id="js-quiz-upload-container-add-btn" class="material-icons">add_box</i>
                    </div>
                    
<!--                    remove this lator-->
                    <button id="js-quiz-upload-submit-button" class="btn btn-outlined btn-large">Create Quiz</button>
                </div>
            </div>
    </form>
        `;

        function addQuestionPreview(questionNumber){
            let leftDiv = document.querySelector(".cont-body-right");
            leftDiv.innerHTML += `<quiz-question title="Your title goes here"
                                            Question="Your question goes here"
                                            q_number=${questionNumber}
                                            answer1="Answer A"
                                            answer2="Answer B"
                                            answer3="Answer C"
                                            answer4="Answer D"
                ></quiz-question>`
        }


        addQuestionPreview(1);
        let wrapperCount = 1;
        let addquestionButton = document.querySelector("#js-quiz-upload-container-add-btn");

        //add more questions button

        addquestionButton.addEventListener('click', ()=>{
            wrapperCount ++;
            let newQuestionWrapper = document.createElement("div");
            newQuestionWrapper.classList.add("quiz-upload-wrapper");
            newQuestionWrapper.id = `quiz-upload-wrapper${wrapperCount}`;
            newQuestionWrapper.innerHTML = `
                      <p class="fnt fnt-mid fnt-bold">Question 01</p>
                      <input type="text" name="question-description" class="question-upload-container-description-box" placeholder="Question">
                      <input id="quiz-upload-container-option-box1" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 1">
                      <input id="quiz-upload-container-option-box2" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 2">
                      <input id="quiz-upload-container-option-box3" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 3">
                      <input id="quiz-upload-container-option-box4" type="text" name="option" class="quiz-upload-container-option-box" placeholder="Option 4">
                      
                      <!--correct answerr-->
                      <p class="fnt fnt-mid fnt-bold">Correct Answer</p>
                      <select id="js-quiz-upload-answer">
                          <option value="opt1">Option 01</option>
                          <option value="opt2">Option 02</option>
                          <option value="opt3">Option 03</option>
                          <option value="opt4">Option 04</option>
                      </select>
        `;
            document.querySelector(".quiz-upload-wrapper-container").appendChild(newQuestionWrapper);
            addQuestionPreview(wrapperCount);
        })


        //handling upload
        let createquiz = document.querySelector("#js-quiz-upload-submit-button");
        let thumbnailUpload = document.querySelector("#js-quiz-upload-thumbnail-upload");
        let quizquestionUploads;



        createquiz.addEventListener('click', (event)=>{
            event.preventDefault();

            //thumbnail
            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

            //textData
            let quizTitle = document.querySelector("#js-quiz-upload-title");
            let quizSubject = document.querySelector("#js-quiz-upload-subject");
            let quizDescription = document.querySelector("#js-quiz-upload-description");
            let quizPrice = document.querySelector("#js-quiz-upload-price");

            let questions = document.querySelectorAll('.quiz-upload-wrapper');

            let questionData = [];



            questions.forEach((question)=>{
                let newQuestion = {};
                newQuestion["question"] = question.querySelector('.question-upload-container-description-box').value;
                newQuestion["opt1"] = question.querySelector('#quiz-upload-container-option-box1').value;
                newQuestion["opt2"] = question.querySelector('#quiz-upload-container-option-box2').value;
                newQuestion["opt3"] = question.querySelector('#quiz-upload-container-option-box3').value;
                newQuestion["opt4"] = question.querySelector('#quiz-upload-container-option-box4').value;
                alert(JSON.stringify(newQuestion))
                questionData.push(newQuestion)
            })
            alert(JSON.stringify(questionData));




            let textData = {

                "userId" : getUserID(),
                "title" : quizTitle.value,
                "subject" : 10,
                "description" : quizDescription.value,
                "price" : quizPrice.value,
                "questionDescriptions" : questionData
            }


            //send the request
            let uploadresponse = fetch('http://localhost:8090/api/teachers/published_quiz/:1', {
                method : "POST",
                body:JSON.stringify(textData),
                credentials : "include"
            })
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

customElements.define('quiz-form', QuizForm);