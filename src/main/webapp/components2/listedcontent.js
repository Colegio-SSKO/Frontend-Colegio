

class ListedContent extends HTMLElement {
    connectedCallback() {

        let content_ID = this.attributes.content_ID.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let description = this.attributes.description.value;
        let rates = this.attributes.rates.value;
        this.innerHTML = `
        <div class="courseList-card fadeInanimation" id="${content_ID}">
        <div class="course-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5 class="fnt fnt-bold fnt-large">${title}</h5>
            <div class="tutor">
                <div class="ratings">
                    <h6 class="fnt fnt-light fnt-small">by ${author}</h6>
                
                    <div class="ratings" style="display: flex; align-items: center;">
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                          <h6 class="fnt fnt-light fnt-small">Ratings(${rates})</h6>
                    </div><br>
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