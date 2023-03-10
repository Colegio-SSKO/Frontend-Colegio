

class ListedContent extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let description = this.attributes.description.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        this.innerHTML = `
        <div class="courseList-card">
        <div class="course-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5>${title}</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6>by ${author}</h6>
                
                    <ratings-content rating="${rating}" votes="${votes}"/>
                </div>
            </div>
            <p>
                ${description}
            </p>
        </div>
        
    </div>
        `;
    }
}
    
customElements.define('listed-content', ListedContent);