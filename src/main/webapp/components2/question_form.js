class Question_form extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <form>
            <div class="question_form">
                <h3 class="fnt fnt-bold fnt-large">Lets publish your question</h3><br>
                <div class="inputs">
                    <div class="input-field fnt fnt-light fnt-mid">
                        <label for="" class="fnt fnt-bold fnt-mid">Enter an appropriate title for your question.</label><br>
                        <input id="js-question-upload-title" type="text" class="fnt fnt-mid fnt-light" required placeholder="Question Title">
                    </div><br><br>
        
        
                    <div class="input-field">
                        <label for="" class="fnt fnt-bold fnt-mid">Enter your question, describe what you want.</label><br><br>
                        <textarea id="js-question-upload-description" class="description_box fnt fnt-mid fnt-light" name="description_box" rows="7" cols="40" placeholder="Enter question description here"></textarea>
                    </div><br><br>
                    
                     <div class="input-field">
                        <p for="" class="fnt fnt-mid fnt-bold">Select the most appropriate subject for your question.</p><br>
                        <select id="js-question-upload-subject" class="fnt-bold fnt fnt-mid">
                            <option class="fnt fnt-mid fnt-bold" value="Science">Science</option>
                            <option class="fnt fnt-mid fnt-bold" value="Mathematics">Mathematics</option>
                            <option class="fnt fnt-mid fnt-bold" value="English">English</option>
                        </select>
                    </div><br><br>
        
                    <div class="input-field">
                        <label for="" class="fnt fnt-bold fnt-mid">Question Image
                            <p style="color: #767676; margin: 10px 0;" class="fnt fnt-mid fnt-light">Upload your question image here. <br>Important Guideline : At least 564x368 pixels; jpeg, jpg, or png</p></label>
                    </div>
        
                    <input type="file" class="myFile fnt fnt-light fnt-mid" name="filename"><br><br>
        
                    <div class="upload_pic"></div><br><br>
        
                    <p class="fnt fnt-mid fnt-bold">Add teacher tags here</p><br>
                     <div class="question-upload-wrapper-container">
                        <div id="question-upload-wrapper1" class="question-upload-wrapper">
                                    <p class="fnt fnt-mid fnt-bold">Teacher 1</p>
                                    <input  id="question-upload-container-option-box1" type="text" name="option" class="question-upload-container-option-box fnt-bold fnt fnt-mid" placeholder="ex:- #1234">
                                   
                        </div>
                        
                    </div>
                    
                    <i id="js-question-upload-container-add-btn" class="material-icons">add_box</i>
                </div>
                <button id="js-question-upload-submit-button" class="btn btn-solid btn-large fnt-mid fnt fnt-bold">Publish</button>
            </div>
        </form>
        
        `;

        //handle add more teacher buttons
        let addMore = document.querySelector('#js-question-upload-container-add-btn');
        let wrapperCount = 1;

        addMore.addEventListener('click', ()=>{
            alert("add more")
            wrapperCount ++;
            let newQuestionWrapper = document.createElement("div");
            newQuestionWrapper.classList.add("question-upload-wrapper");
            newQuestionWrapper.id = `question-upload-wrapper${wrapperCount}`;
            newQuestionWrapper.innerHTML = `
                      <p class="fnt fnt-mid fnt-bold">Teacher ${wrapperCount}</p>
                      <input id="question-upload-container-option-box1" type="text" name="option" class="question-upload-container-option-box" placeholder="ex:- #1234">
   
                      
                 
        `;
            document.querySelector(".question-upload-wrapper-container").appendChild(newQuestionWrapper);
        })



        //send button handling
        let title = document.querySelector('#js-question-upload-title');
        let subject = document.querySelector('#js-question-upload-subject');
        let description = document.querySelector('#js-question-upload-description');
        let teachers = document.querySelectorAll('.question-upload-container-option-box');
        alert(teachers.length)

        
        document.querySelector('#js-question-upload-submit-button').addEventListener('click', (event)=>{
            event.preventDefault();
            alert("publish ek wed");

            let teachers = document.querySelectorAll('.question-upload-container-option-box');
            alert(teachers.length)

            let teacherData = [];

            teachers.forEach((teacher)=>{
                let newTag = {
                    "tag" : teacher.value
                }
                teacherData.push(newTag);
            })

            let questionData = {
                "title" : title.value,
                "subject" : 10,//change this later
                "description" : description.value,
                "teachers" : teacherData
            }
            alert(JSON.stringify(questionData))

            //send the request
            let uploadresponse = fetch('http://localhost:8090/api/users/publish_question/:1', {
                method : "POST",
                body:JSON.stringify(questionData),
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
    
customElements.define('question-form', Question_form);