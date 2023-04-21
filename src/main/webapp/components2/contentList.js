class ContentList extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        alert(dataString);
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<small-listed content_id="${i["content_id"]}" img_src="${i["img_src"]}" title="${i["title"]}" author="${i["author"]}" price="${i["price"]}"></small-listed>
            `;
        }

        this.innerHTML = `
         <div class="content-list-wrap">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('content-list', ContentList);





