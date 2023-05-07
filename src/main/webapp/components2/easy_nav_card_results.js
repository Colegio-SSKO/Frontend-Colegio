class Easy_nav_card_results extends HTMLElement {

    connectedCallback() {
    alert("mekata awaa")
        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);

        let htmlcontent = "";

        for (let i of data) {
            if (i["type"]==1){
                htmlcontent += `<search-mainquiz content_ID="${i["content_id"]}" img_src="${i["image"]}" title="${i["title"]}" author="${i["f_name "]+i["l_name"]} ></search-mainquiz>`;
            }
            else if (i["type"]==0){
                htmlcontent += `<search-maincourse content_ID="${i["content_id"]}" img_src="${i["image"]}" title="${i["title"]}" author="${i["f_name "]+i["l_name"]}" ></search-maincourse>`;
            }
        }

        this.innerHTML = `
         <div class="description">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('easy-navresult', Easy_nav_card_results);