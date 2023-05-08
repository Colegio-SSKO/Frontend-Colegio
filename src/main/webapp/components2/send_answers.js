class Send_answers extends HTMLElement {



    connectedCallback() {

        let author_propic = this.attributes.author_propic.value;
        let title= this.attributes.title.value;
        let media= this.attributes.media.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        let questionId = this.attributes.questionId.value;

        this.innerHTML = `
        <form>
           <div class="open-question-new-container">
            <div class="open-question-new-heading fnt fnt-mid fnt-bold">
                <h3>${title}</h3>
                <p>
                    ${description}
                </p>
            </div>
            <div class="open-question-new-image1">
                <img src="${media}" alt="">
            </div>
            <div class="open-question-new-btn">
                <div class="open-question-new-profile">
                    <div class="img">
                        <img src="${author_propic}" alt="">
                    </div>
                    <div class="texts">
                        <h4 class=" fnt fnt-mid fnt-bold">Question From: <span class=" fnt fnt-mid fnt-bold">${author}</span></h4>
                    </div>
                </div>
                <div id="js-answer-upload-wrapper" class="open-question-new-btn">
                    <label for="" class=" fnt fnt-mid fnt-bold">Upload answers</label>
                    <input style="display: none" id="js-thumbnail-upload" type="file">
                    <i id="js-image-upload-answer" class="material-icons">image</i>
                </div>
            </div>
            <h3>
                Answers
            </h3>
            <div class="open-question-new-answers">
                <img id="js-answer-preview"  src="../static/img/components_images/Group%2041.png" alt="">

            </div>
            <button id="js-question-upload-submit-button" class="btn btn-solid btn-large fnt-mid fnt fnt-bold">Submit</button>
        </div>
        </form>
        `;
        //setting event listener for the video upload icon of first wrapper
        document.querySelector(`#js-image-upload-answer`).addEventListener('click',(event)=>{
            alert(event.target.parentElement.id);
            document.querySelector(`#${event.target.parentElement.id} #js-thumbnail-upload`).click();
        })


        let thumbnailUpload = document.querySelector("#js-thumbnail-upload");


        let preview = document.querySelector('#js-answer-preview');


        thumbnailUpload.addEventListener('change', (event)=>{
            let image = thumbnailUpload.files[0];
            const reader = new FileReader();
            reader.addEventListener("load",  () =>{
                preview.src = reader.result;
            }, false);

            if (image) {
                reader.readAsDataURL(image);
            }
        })

        alert(questionId);

        document.querySelector('#js-question-upload-submit-button').addEventListener('click', async (event)=>{
            event.preventDefault();
            alert("publish ek wed");


            let formData = new FormData();

            formData.append( 'thumbnailImage' ,thumbnailUpload.files[0]);

            let fileUploadresponseme = await fetch('http://localhost:8080/api/answerQuestion/', {method : "POST", body:formData})
                .then((res)=>{
                    alert(JSON.stringify(res));
                    return res.json();
                })

            if(!fileUploadresponseme["isError"]){
                alert("Upload una");
                alert(JSON.stringify(fileUploadresponseme["thumbnail"]));

                let textData = {
                    "question_id" : questionId,
                    "image" : fileUploadresponseme["thumbnail"],
                }

                alert(JSON.stringify(textData))

                //send the request
                let uploadresponse = fetch('http://localhost:8090/api/teachers/answer_question/:'+getUserID(), {
                    method : "POST",
                    body:JSON.stringify(textData),
                    credentials : "include"
                })
                    .then((res)=>{
                        return res.json();
                    })

                if(!uploadresponse["isError"]){
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

customElements.define('send-answers', Send_answers);