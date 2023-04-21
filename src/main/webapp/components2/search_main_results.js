class Search_main_results extends HTMLElement {
    connectedCallback() {

    alert("kavindww")
        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);

        alert("metana weda")
        let htmlcontent = "";

        for (let i of data) {
            alert(i["type"])
            if (i["type"]=="quiz"){
                alert(i["content_id"])
                htmlcontent += `<search-mainquiz content_ID="${i["content_id"]}" img_src="${i["quiz_img"]}" title="${i["quiz_title"]}" author="${i["creator"]}" teacher_id="${i["teacher_id"]}" ></search-mainquiz>`;
            }
            else if (i["type"]=="course"){
                alert(i["content_id"])
                htmlcontent += `<search-maincourse content_ID="${i["content_id"]}" img_src="${i["intro_media"]}" title="${i["course_title"]}" author="${i["creator"]}" ></search-maincourse>`;
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

customElements.define('search-mainresults', Search_main_results);