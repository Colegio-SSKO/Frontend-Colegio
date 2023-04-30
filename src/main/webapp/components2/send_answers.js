class Send_answers extends HTMLElement {



    connectedCallback() {

        let author_propic = this.attributes.author_propic.value;
        let title= this.attributes.title.value;
        let media= this.attributes.media.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;

        this.innerHTML = `
       <div class="open-question-new-container">
        <div class="open-question-new-heading">
            <h3>${title}</h3>
            <p>
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
                    <h4>Question From: <span>${author}</span></h4>
                </div>
            </div>
            <div class="open-question-new-btn">
                <label for="">Upload answers</label>
                <input type="file">
            </div>
        </div>
        <h3>
            Answers
        </h3>
        <div class="open-question-new-answers">
            <img src="../static/img/components_images/Group%2041.png" alt="">
            <img src="../static/img/components_images/Group%2041.png" alt="">
        </div>
        <div class="open-question-new-feedback">
            <h3>Feedback for the answers</h3>
            <div class="open-question-new-comment">
                <img src="${getUserProfileImage()}" alt="">
                <input placeholder="Comment here..." type="text">
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('send-answers', Send_answers);