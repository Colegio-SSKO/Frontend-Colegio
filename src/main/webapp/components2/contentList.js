class ContentList extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);



        let htmlcontent = "";

        let count = 4

        for (let i = 0; i<count && i < data.length ; i++){
            htmlcontent += `<small-listed content_id="${data[i]["content_id"]}" img_src="${data[i]["img_src"]}" title="${data[i]["title"]}" author="${data[i]["author"]}" price="${data[i]["price"]}" rates="${data[i]["rate_count"]}"></small-listed>
                    `;
        }

        // for (let i of data) {
        //     htmlcontent += `<small-listed content_id="${i["content_id"]}" img_src="${i["img_src"]}" title="${i["title"]}" author="${i["author"]}" price="${i["price"]}" rates="${i["rate_count"]}"></small-listed>
        //     `;
        // }

        this.innerHTML = `
         <div id="js-home-cont-container" class="content-list-wrap fadeInanimation">
            
                 `+ htmlcontent +`
            </div>
            <div id="js-show-more-cont-list" class="more-btn"><button class="fnt-bold fnt fnt-mid btn btn-special more-btn">Show more</button></div>
            
        `;
        let showMore = document.querySelector('#js-show-more-cont-list');
        let contContainer = document.querySelector('#js-home-cont-container')
        let htmlPart = "";

        showMore.addEventListener('click', (event)=>{
            event.preventDefault();
            htmlPart = "";
            count += 4;
            if (count>= data.length){
                showMore.style.display = "none";
            }
            for (let i = 0; i<count && i < data.length ; i++){
                htmlPart += `<small-listed content_id="${data[i]["content_id"]}" img_src="${data[i]["img_src"]}" title="${data[i]["title"]}" author="${data[i]["author"]}" price="${data[i]["price"]}" rates="${data[i]["rate_count"]}"></small-listed>
                    `;


            }
           
            contContainer.innerHTML = htmlPart;


        })

    }
}



customElements.define('content-list', ContentList);





