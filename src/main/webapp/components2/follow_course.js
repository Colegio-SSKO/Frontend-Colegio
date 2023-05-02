class follow_course extends HTMLElement {
    connectedCallback() {

        let author_pic = this.attributes.author_pic.value;
        let media = this.attributes.media.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;
        // let course_id = this.attributes.course_id.value;
        // let content_id = this.attributes.content_id.value;
        this.innerHTML = `
        <div class="open-course-wrap-follow">
        <div class="open-course-image">
            <iframe src="${media}" frameborder="0"></iframe>
        </div><br>

        <h4 class="open-course-title fnt fnt-bold fnt-large">${title} </h4>
        <p class="open-course-desc fnt fnt-light fnt-mid">${description}
        </p><br>

        <with-title img_src = "${author_pic}" name = "${author}" qulifi = "${author_title}"></with-title>
        <div class="open-course-cont">
      
        </div>
    </div>

        `;

    }
}

customElements.define('follow-course', follow_course);