class ContentList extends HTMLElement {
    connectedCallback() {


        let dataString = this.attributes.dataString.value;

        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<small-listed votes="${i["votes"]}" rating="${i["ratings"]}" img_src="${i["img_src"]}" title="${i["title"]}" author="${i["author"]}" price="${i["price"]}"></small-listed>
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