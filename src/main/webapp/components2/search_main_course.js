

class Search_main_course extends HTMLElement {
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
            <h5>${title}</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6>by ${author}</h6>
                </div>
            </div>
        </div>
        
    </div>
        `;
    }
}

customElements.define('search-main-course', Search_main_course);