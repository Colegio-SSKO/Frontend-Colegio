class Open_question_question extends HTMLElement {



    connectedCallback() {

        let id = this.attributes.id.value;
        let author_propic = this.attributes.author_propic.value;
        let qulifi = this.attributes.qulifi.value;
        let title= this.attributes.title.value;
        let media= this.attributes.media.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        let teacherId = this.attributes.teacherId.value
        let img_src2 = this.attributes.img_src2.value

        this.innerHTML = `
       <div class="open-question-new-container">
        <div class="open-question-new-heading">
            <h3 class="fnt fnt-large fnt-bold">${title}</h3>
            <p class="fnt fnt-mid fnt-bold">
                ${description}
            </p>
        </div>
        <div class="open-question-new-image1">
            <img  src="${media}" alt="">
        </div>
        <div class="open-question-new-btn">
            <div class="open-question-new-profile">
                <div class="img">
                    <img src="${author_propic}" alt="">
                </div>
                <div class="texts">
                    <h4 class="fnt fnt-mid fnt-bold">Accepted by: <span class="fnt fnt-mid fnt-bold">${author}</span></h4>
                    <h5 class="fnt fnt-small fnt-bold">${qulifi}</h5>
                </div>
            </div>
            <div class="open-question-new-btn">
                <button id="js-open-q-q-request-session" class="btn btn-a btn-solid btn-small">Request Session</button>
            </div>
        </div>
        <h3 class="fnt fnt-large fnt-bold">
            Answers
        </h3>
        <div class="open-question-new-answers">
            <img src="${img_src2}" alt="">
        </div>
    </div>
        `;

        document.querySelector(`#js-open-q-q-request-session`).addEventListener('click', async (event)=>{
            event.preventDefault();
            alert(teacherId);
            alert("req session");
            let req = {
                "teacher_id" : teacherId,
                "question_id" : id
            }
            alert(JSON.stringify(req));

            let res = await fetch("http://localhost:8090/api/users/session_request/:4", {
                body : JSON.stringify(req),
                method : "POST",
                credentials : "include"
            }).then((response)=>
                response.json()

            );
            alert("request ek ywwa");

        })
    }
}

customElements.define('open-question-question', Open_question_question);