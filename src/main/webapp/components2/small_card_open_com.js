class Small_card_open_com extends HTMLElement {
    async connectedCallback() {


        let img_src = this.attributes.img_src.value;
        // let title = this.attributes.title.value;
        // let description = this.attributes.description.value;
        // let author = this.attributes.author.value;
        // let date = this.attributes.date.value;
        // let price = this.attributes.price.value;
        // let rate_count = this.attributes.rate_count.value;
        let content_id = this.attributes.content_id.value;

        const res3 = await fetch("http://localhost:8090/api/visitors/small_card_open_comment/:" + content_id, {method: "GET", credentials:"include"}).then((response) => response.text());

        this.innerHTML = `
            <div class="featured-cont-wrap-buying" id="${content_id}">
                <div class="featured-cont-image-buying">
                    <img src="${img_src}" alt="">
                </div>
            <br>
                <div>
                    <span class="fnt-large fnt fnt-bold">What our clients says</span>
                </div>
            <br>    
                <div>
                    <comment-list dataString="${encodeURIComponent(res3)}"> </comment-list>
                </div>
            </div>
        `;

        // let addtocart = document.querySelectorAll(".addtocart");
        //
        //
        // for (let element of addtocart){
        //     element.addEventListener('click',async (event)=>{
        //
        //         let content_id = event.target.id;
        //
        //
        //         let requestBody= {
        //             "content_id": content_id
        //         }
        //         let url = "http://localhost:8090/api/users/addtocart/:" + getUserID();
        //         let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
        //             response.json()
        //
        //         );
        //
        //
        //
        //         let popup = document.querySelector(".popup-content");
        //         alert("helloo weeessa")
        //         document.querySelector(".popup-container").style.display = "flex";
        //
        //         alert(res.message);
        //
        //         if(res.message==="You already added this content"){
        //             popup.innerHTML = `
        //                 <img src="../static/img/components_images/error.jpg" alt="">
        //                 <h2>${res.message}</h2>
        //                 <button btn btn-primary><a href="/cart">OK</a></button>
        //
        //         `;
        //         }
        //         else {
        //             popup.innerHTML = `
        //                 <img src="../static/img/components_images/success.jpg" alt="">
        //                 <h2>${res.message}</h2>
        //                 <button btn btn-primary><a href="/cart">OK</a></button>
        //
        //         `;
        //         }
        //     })
        // }

    }
}

customElements.define('small-cardopen', Small_card_open_com);