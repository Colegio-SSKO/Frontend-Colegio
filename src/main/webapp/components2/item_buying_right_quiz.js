class Item_buying_right_quiz extends HTMLElement {
    async connectedCallback() {


        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let date = this.attributes.date.value;
        let price = this.attributes.price.value;
        let rate_count = this.attributes.rate_count.value;
        let content_id = this.attributes.content_id.value;
        let purchase_count = this.attributes.purchase_count.value;
        let q_number = this.attributes.q_number.value;
        let time = this.attributes.time.value;



        this.innerHTML = `
        <div class="featured-cont-wrap-x">
        <div class="featured-cont-right">
            <div class="featured-cont-details">
                <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
                <p class="fnt fnt-bold fnt-large">${description}</p><br>
                <h6 class="fnt fnt-bold fnt-mid">Number of questions ${q_number}</h6>
                <h6 class="fnt fnt-bold fnt-mid">Time duration ${time} mins</h6>
                <h6 class="fnt fnt-bold fnt-mid">By ${author}</h6>
                <h6 class="fnt fnt-mid">Published on <bold>${date}</bold></h6>
                <h6 class="fnt fnt-mid">${purchase_count} Sold</h6>
                <div style="display: flex; align-items: center;">
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <h6 class="fnt fnt-light fnt-mid">Ratings(${rate_count})</h6>
                </div><br>
                <h3 class="fnt fnt-bold fnt-extraLarge">LKR.${price}</h3>
            </div>

            <div class="featured-cont-actions">
                <button class="addtocart btn btn-solid btn-large fnt-mid fnt-bold fnt" id="${content_id}">Add to cart</button>
                <button class="btn btn-solid btn-large fnt-mid fnt-bold fnt">Buy Now</button>
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

customElements.define('small-cardquiz', Item_buying_right_quiz);