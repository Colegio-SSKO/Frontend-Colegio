class search_resultlist extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<search-result img_src="${i["img_src"]}" name="${i["name"]}" quli="${i["quli"]}" teacher_id="${i["teacher_id"]}" ></search-result>
            `;
        }

        this.innerHTML = `
         <div class="description">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('search-resultlist', search_resultlist);