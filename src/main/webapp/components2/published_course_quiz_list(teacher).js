
class publishCoursequizList extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));

        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<pop-up></pop-up><publish-coursequiz img_src="${i["img_src"]}" title="${i["title"]}" price="${i["price"]}" content_id="${i["content_id"]}" num="${i["status"]}"></publish-coursequiz>
            `;
        }

        this.innerHTML = `
         <div class="content-list-wrap">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('publishcoursequiz-list', publishCoursequizList);





