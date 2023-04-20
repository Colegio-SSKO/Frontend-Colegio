class Search_main_results extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            if (i["type"]=="quiz"){
                htmlcontent += `<search-main-quiz img_src="${i["quiz_img"]}" title="${i["quiz_title"]}" author="${i["creator"]}" teacher_id="${i["teacher_id"]}" ></search-main-quiz>`;
            }
            else if (i["type"]=="course"){
                htmlcontent += `<search-main-course img_src="${i["intro_media"]}" name="${i["course_title"]}" author="${i["creator"]}" ></search-main-course>`;
            }
            else
            htmlcontent += `<search-result img_src="${i["img_src"]}" name="${i["name"]}" quli="${i["quli"]}" teacher_id="${i["id"]}" ></search-result>`;
        }

        this.innerHTML = `
         <div class="description">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('search-main-results', Search_main_results);