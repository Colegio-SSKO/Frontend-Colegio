class Featured_cont_visitor extends HTMLElement {
    async connectedCallback() {
        let data= await fetch("http://localhost:8090/api/visitors/view_featured_cont", {
            method: 'GET',
            credentials : "include"
        }).then(
            (res)=>{
                return res.json();
            }
        )

        let content_id = data['content_id'];
        let content_name = data['title'];


        this.innerHTML = `
        <div class="fadeInanimation">
            <div class="fnt fnt-bold fnt-large">Featured in Colegio</div>
                <div class="featured-cont-wrap">
                        <div class="featured-cont-image">
                            <img src="${data['img_src']}" alt="">
                        </div>
                        
                        <div class="featured-cont">
                            <div class="featured-cont-details">
                                <h4 class="fnt fnt-extraBold fnt-large">${data['title']}</h4>
                                <p class="fnt fnt-bold fnt-mid">${data['description']}</p><br>
                                <h6 class="fnt fnt-bold fnt-mid">By ${data['author']}</h6>
                                <h6 class="fnt fnt-mid">Published on <bold>${data['date']}</bold> | ${data['subject']}</h6>
                                
                                <div style="display: flex; align-items: center;">
                                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                                  <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                                  <h6 class="fnt fnt-light fnt-mid">Ratings(${data['rates']})</h6><br>
                                </div><br>
                                  <h3 class="fnt fnt-bold fnt-extraLarge">LKR.${data['price']}</h3>
                                
                            </div>
                
                            <div class="featured-cont-actions">
                                <button class="addtocart btn btn-solid btn-large fnt fnt-bold fnt-mid" id="${data['content_id']}">Add to Cart</button>
                                <button id="js-payhere-paynow-btn" class="btn btn-solid btn-large fnt fnt-bold fnt-mid">Buy Now</button>
                            </div>
                
                        </div>
        
                
            </div>
    
        </div>
        `;



        let addtocart = document.querySelectorAll(".addtocart");


        for (let element of addtocart){
            element.addEventListener('click',async (event)=>{




                let requestBody= {
                    "content_id": content_id
                }
                let url = "http://localhost:8090/api/users/addtocart/:" + getUserID();
                let res = await fetch(url, {
                    method : "POST",
                    body : JSON.stringify(requestBody),
                    credentials : "include"
                }).then((response)=>
                    response.json()

                );
                // alert(res.message);
                //
                // if(res.message==="You already added this content"){
                //     alert(res.message);
                // }
                //
                // else{
                //     alert("added content successfully");
                // }

                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();


                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";



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


        document.querySelector('#js-payhere-paynow-btn').addEventListener('click', async (event)=>{
            event.preventDefault();

                window.history.pushState({}, "", "/auth/signin" +
                    "");
                urlLocation();



        })

    }
}

customElements.define('featured-visitor', Featured_cont_visitor);