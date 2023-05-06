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

        alert("payhere")
        document.querySelector('#js-payhere-paynow-btn').addEventListener('click', async (event)=>{
            event.preventDefault();

            alert("paynow")
            let reqBody = {
                "content" :[
                    {"content_id": 20},
                    {"content_id": 21}
                ]
            }

            let orderData = await fetch('http://localhost:8090/api/authenticate/getOrderData/', {
                method : "POST",
                body : JSON.stringify(reqBody)
            }).then((response)=>{
                return response.json();
            })
            alert(JSON.stringify(hash))


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
            let payment = {
                "sandbox": true,
                "merchant_id": `${orderData["merahantID"]}`,    // Replace your Merchant ID
                "return_url": undefined,     // Important
                "cancel_url": undefined,     // Important
                "notify_url": "http://sample.com/notify",
                "order_id": `${orderData["orderID"]}`,
                "items": "Door bell wireles",
                "amount": `${orderData["amount"]}`,
                "currency": "LKR",
                "hash": `${orderData["hash"]}`, // *Replace with generated hash retrieved from backend
                "first_name": `${orderData["f_name"]}`,
                "last_name": `${orderData["l_name"]}`,
                "email": `${orderData["email"]}`,
                "phone": `${orderData["phone"]}`,
                "address": `${orderData["address"]}`,
                "city": `${orderData["city"]}`,
                "country": `${orderData["country"]}`,
                "delivery_address": "No. 46, Galle road, Kalutara South",
                "delivery_city": "Kalutara",
                "delivery_country": "Sri Lanka",
                "custom_1": "",
                "custom_2": "",
                "split_payment": true,
                "split_payment_data" : {

                }
            };
            payhere.startPayment(payment);


        })

    }
}

customElements.define('featured-cont', Featured_cont);