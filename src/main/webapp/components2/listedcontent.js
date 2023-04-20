

class ListedContent extends HTMLElement {
    connectedCallback() {

        let content_ID = this.attributes.content_ID.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let description = this.attributes.description.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        this.innerHTML = `
        <div class="courseList-card" id="${content_ID}">
        <div class="course-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5 class="fnt fnt-bold fnt-large">${title}</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6 class="fnt fnt-bold fnt-small">by ${author}</h6>
                
                    <ratings-content rating="${rating}" votes="${votes}"/>
                </div>
            </div>
            <p class="fnt fnt-light fnt-mid">
                ${description}
            </p>
        </div>
        
    </div>
        `;
    }
}

customElements.define('listed-content', ListedContent);