class Publish_coursequiz extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let price = this.attributes.price.value;
        let content_id = this.attributes.content_id.value;
        let num = this.attributes.num.value;

        this.innerHTML = `
        <div class="small-listed-cont-wrap">
            <div class="small-listed-cont-image">
                <img src="${img_src}" alt="course image">
            </div>
            <div class="small-listed-cont-details">
                <h5 class="fnt fnt-bold fnt-mid">${title}</h5>
                <h3 class="fnt fnt-bold fnt-large">LKR.${price}</h3>
            </div>
            <h3 class="teacher_disable_course fnt-mid fnt-light" id="${content_id}">${num == 1 ? '' : 'Disable content>>'}</h3>
        </div>
        `;

        if (num == 1) {
            let disable = document.querySelector(`#${content_id}`);
            disable.style.display = 'none';
        }



        let disable = document.querySelectorAll(".teacher_disable_course");
        for (let element of disable){
            element.addEventListener('click', async (event)=>{
                let content_id = event.target.id;
                let requestBody = {
                    "content_id": content_id
                };
                let url = "http://localhost:8090/api/teachers/teacher_disable_content" ;
                let res = await fetch(url, {method : "POST", credentials: "include", body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()
                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.num==1) {
                    popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2>Disabled content successfully</h2>
                        <button btn btn-primary><a href="/teacher_published_course">OK</a></button>

                `;
                }
            })
        }
    }
}

customElements.define('publish-coursequiz', Publish_coursequiz);