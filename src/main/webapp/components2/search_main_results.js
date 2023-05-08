class Search_main_results extends HTMLElement {
    connectedCallback() {
    alert("search awa")
        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);
    alert(data);
        let htmlcontent = "";

        for (let i of data) {
            if (i["type"]=="quiz"){
                htmlcontent += `<search-mainquiz content_ID="${i["content_id"]}" img_src="${i["img_src"]}" title="${i["quiz_title"]}" author="${i["creator"]}"  ></search-mainquiz>`;
            }
            else if (i["type"]=="course"){
                htmlcontent += `<search-maincourse content_ID="${i["content_id"]}" img_src="${i["img_src"]}" title="${i["course_title"]}" author="${i["creator"]}" ></search-maincourse>`;
            }
            else if (i["type"]=="teacher"){
                htmlcontent += `<search-teacher img_src="${i["img_src"]}" name="${i["name"]}" quli="${i["quli"]}" teacher_id="${i["id"]}" ></search-teacher>`;}
            else{
                htmlcontent += `<search-organization img_src="${i["img_src"]}" name="${i["name"]}" organization_id="${i["id"]}" ></search-organization>`;
            }
        }

        this.innerHTML = `
         <div class="description">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('search-mainresults', Search_main_results);