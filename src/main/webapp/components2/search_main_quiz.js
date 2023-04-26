

class Search_main_quiz extends HTMLElement {
    connectedCallback() {

        let content_ID = this.attributes.content_ID.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;

        this.innerHTML = `
        <div class="courseList-card search_quiz_main" id="${content_ID}">
        <div class="course-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="course-details">
            <h5><a href="/quiz_serachopen">${title}</a> </h5>
            <div class="tutor">
                <div class="ratings">
                    <h6>by ${author}</h6>
                </div>
            </div>
        </div>
        
    </div>
        `;

        let search_quiz = document.querySelectorAll(".search_quiz_main");

        for (let element of search_quiz){
            element.addEventListener('click',async (event)=> {

                    let content_id = event.currentTarget.id;
                    temporary_data = content_id;
                }
            );
        }
    }
}

customElements.define('search-mainquiz', Search_main_quiz);