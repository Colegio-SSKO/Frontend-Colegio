class Question extends HTMLElement {
    connectedCallback() {

        let img_src2 = this.attributes.img_src2.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let img_src = this.attributes.img_src.value;
        let accept_person = this.attributes.accept_person.value;
        let pro_pic = this.attributes.pro_pic.value;
        this.innerHTML = `
        <div class="question-comment-main">
            <div class="comment-about">
                 <div class="Q_title">
                      <h3 class="fnt fnt-bold fnt-large">${title}</h3>
                </div>

                <div class="Q_description">
                        <p class="fnt fnt-bold fnt-mid">${description}</p>
                </div>

                <div class="upload_image">
                     <img src="${img_src2}" alt="" width="350px" height="350px">
                </div>

                <Accepted img_src="${img_src}" accepted_person="${accept_person}" pro_pic="${pro_pic}"/>
            </div>

        </div>
        `;
    }
}
    
customElements.define('q-question', Question);