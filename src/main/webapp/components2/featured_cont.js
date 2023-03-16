class Featured_cont extends HTMLElement {
    async connectedCallback() {
        let data= await fetch("http://localhost:8090/api/users/view_featured_cont", {method: 'GET'}).then(
            (res)=>{
                return res.json();
            }
        )

        this.innerHTML = `
        <div class="fnt fnt-bold fnt-large">Featured in Colegio</div>
        <div class="featured-cont-wrap">
        <div class="featured-cont-image">
            <img src="${data['img_src']}" alt="">
        </div>
        
        <div class="featured-cont">
            <div class="featured-cont-details">
                <h4 class="fnt fnt-extraBold fnt-large">${data['title']}</h4>
                <p class="fnt fnt-bold fnt-mid">${data['description']}</p>
                <h6 class="fnt fnt-bold fnt-small">By ${data['author']}</h6><br>
                <h6 class="fnt fnt-small">Published on <bold>${data['date']}</bold>| ${data['subject']}</h6>

                <h3 class="fnt fnt-bold fnt-extraLarge">LKR.${data['price']}</h3>
            </div>

            <div class="featured-cont-actions">
                <button class="addtocart btn btn-solid btn-large" id="${data['content_id']}"><a href="/cart">Add to </a></button>
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
                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();
            })
        }

    }
}
    
customElements.define('featured-cont', Featured_cont);