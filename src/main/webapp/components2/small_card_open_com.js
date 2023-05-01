class Small_card_open_com extends HTMLElement {
    async connectedCallback() {


        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let date = this.attributes.date.value;
        let price = this.attributes.price.value;
        let rate_count = this.attributes.rate_count.value;
        let content_id = this.attributes.content_id.value;



        this.innerHTML = `
        <div class="featured-cont-wrap">
        <div class="featured-cont-image">
            <img src="${img_src}" alt="">
        </div>
        
        <div class="featured-cont">
            <div class="featured-cont-details">
                <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
                <p class="fnt fnt-bold fnt-mid">${description}</p><br>
                <h6 class="fnt fnt-bold fnt-small">By ${author}</h6>
                <h6 class="fnt fnt-small">Published on <bold>${date}</bold></h6>
                <div style="display: flex; align-items: center;">
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <h6 class="fnt fnt-light fnt-small">Ratings(${rate_count})</h6>
                </div><br>
                <h3 class="fnt fnt-bold fnt-extraLarge">LKR.${price}</h3>
            </div>

            <div class="featured-cont-actions">
                <button class="addtocart btn btn-solid btn-large" id="${content_id}">Add to cart</button>
                <button class="btn btn-solid btn-large">Buy Now</button>
            </div>

        </div>

        
    </div>
        `;

        let addtocart = document.querySelectorAll(".addtocart");


        for (let element of addtocart){
            element.addEventListener('click',async (event)=>{

                let content_id = event.target.id;


                let requestBody= {
                    "content_id": content_id
                }
                let url = "http://localhost:8090/api/users/addtocart/:" + getUserID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );



                let popup = document.querySelector(".popup-content");
                alert("helloo weeessa")
                document.querySelector(".popup-container").style.display = "flex";

                alert(res.message);

                if(res.message==="You already added this content"){
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button btn btn-primary><a href="/cart">OK</a></button>

                `;
                }
                else {
                    popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button btn btn-primary><a href="/cart">OK</a></button>

                `;
                }
            })
        }

    }
}

customElements.define('small-cardopen', Small_card_open_com);