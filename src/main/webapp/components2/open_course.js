class Open_course extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        this.innerHTML = `
        <div class="open-course-wrap">
        <div class="open-course-image">
            <img src="${img_src}" alt="">
        </div>

        <div class="cont-ratings">
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span>(102)</span>
    
        </div>

        <h4 class="open-course-title">${title} </h4>
        <p class="open-course-desc">${description}
        </p>

        <div class="open-course-author">${author}</div>
        <div class="open-course-cont">

    
            <description-head heading="heading" content="hello"/>
            <description-head heading="heading2" content="hello2"/>


        </div>
    </div>

        `;
    }
}
    
customElements.define('open-course', Open_course);