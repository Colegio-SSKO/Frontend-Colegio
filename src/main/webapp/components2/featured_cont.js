class Featured_cont extends HTMLElement {
    async connectedCallback() {
        let data= await fetch("http://localhost:8090/api/users/view_featured_cont", {
            method: 'GET',
            credentials : "include"
        }).then(
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
                <p class="fnt fnt-bold fnt-mid">${data['description']}</p><br>
                <h6 class="fnt fnt-bold fnt-small">By ${data['author']}</h6>
                <h6 class="fnt fnt-small">Published on <bold>${data['date']}</bold>| ${data['subject']}</h6>
                
                <div style="display: flex; align-items: center;">
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                  <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                  <h6 class="fnt fnt-light fnt-small">Ratings(${data['rates']})</h6>
                </div><br>
                
                <h3 class="fnt fnt-bold fnt-extraLarge">LKR.${data['price']}</h3>
            </div>

            <div class="featured-cont-actions">
                <button class="addtocart btn btn-solid btn-large fnt fnt-bold fnt-mid" id="${data['content_id']}">Add to Cart</button>
                <button class="btn btn-solid btn-large fnt fnt-bold fnt-mid">Buy Now</button>
            </div>

        </div>

        
    </div>
    
        `;
        //payhere


        // Show the payhere.js popup, when "PayHere Pay" is clicked
        document.querySelector('.js-payhere-buyNow').onclick = async function (e) {

            let orderData = {
                "merchant_id" : "1222924",
                "order_id" : 1,
                "amount" : 100.0,
                "currency" : "LKR"
            }

            let hash = await fetch('http://localhost:8090/api/authenticate/getOrderHash/', {
                body : JSON.stringify(orderData),
                method : "POST"
            })
                .then((response)=>{
                    return response.json();
                })
            alert(hash["hash"])

            // Payment completed. It can be a successful failure.
            payhere.onCompleted = function onCompleted(orderId) {
                console.log("Payment completed. OrderID:" + orderId);
                // Note: validate the payment and show success or failure page to the customer
            };

            // Payment window closed
            payhere.onDismissed = function onDismissed() {
                // Note: Prompt user to pay again or show an error page
                console.log("Payment dismissed");
            };

            // Error occurred
            payhere.onError = function onError(error) {
                // Note: show an error page
                console.log("Error:"  + error);
            };

            // Put the payment variables here

            var payment = {
                "sandbox": true,
                "merchant_id" : "1222924",    // Replace your Merchant ID
                "return_url": "http://localhost:8080/",     // Important
                "cancel_url": "http://localhost:8080/",     // Important
                "notify_url": "http://sample.com/notify",
                "order_id" : "12345",
                "items": "Door bell wireles",
                "amount" : 1000,
                "currency" : "LKR",
                "hash": hash["hash"], // *Replace with generated hash retrieved from backend
                "first_name": "Saman",
                "last_name": "Perera",
                "email": "samanp@gmail.com",
                "phone": "0771234567",
                "address": "No.1, Galle Road",
                "city": "Colombo",
                "country": "Sri Lanka",
                "delivery_address": "No. 46, Galle road, Kalutara South",
                "delivery_city": "Kalutara",
                "delivery_country": "Sri Lanka",
                "custom_1": "",
                "custom_2": ""
            };


            payhere.startPayment(payment);
        };


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

customElements.define('featured-cont', Featured_cont);