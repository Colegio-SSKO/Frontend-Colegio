class ContentList extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);
        alert(JSON.stringify(data));


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<small-listed content_id="${i["content_id"]}" img_src="${i["img_src"]}" title="${i["title"]}" author="${i["author"]}" price="${i["price"]}" rates="${i["rate_count"]}"></small-listed>
            `;
        }

        this.innerHTML = `
         <div class="content-list-wrap fadeInanimation">
            
                 `+ htmlcontent +`
            </div>
            <div class="more-btn"><button class="fnt-bold fnt fnt-mid btn btn-special more-btn">Show more</button></div>
            
        `;
    }
}

customElements.define('content-list', ContentList);





