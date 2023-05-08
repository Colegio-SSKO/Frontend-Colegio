

class Search_main_course extends HTMLElement {
    connectedCallback() {

        let content_ID = this.attributes.content_ID.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;

        this.innerHTML = `
        <div class=" search_course_main " id="${content_ID}">
        <div class="course-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5><a href="/small_cardopen" class="fnt-bold fnt-mid fnt">${title}</a></h5>
            <div class="tutor">
                <div class="ratings">
                    <h6 class="fnt fnt-mid">by ${author}</h6>
                </div>
            </div>
        </div>
        
    </div>
        `;

        let search_course = document.querySelectorAll(".search_course_main");

        for (let element of search_course){
            element.addEventListener('click',async (event)=> {

                    let content_id = event.currentTarget.id;
                    temporary_data = content_id;


                window.history.pushState({}, "", "/small_cardopen");
                urlLocation();
                }
            );
        }
    }
}

customElements.define('search-maincourse', Search_main_course);