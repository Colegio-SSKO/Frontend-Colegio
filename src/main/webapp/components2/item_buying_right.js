class Item_buying_right extends HTMLElement {
    async connectedCallback() {


        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let date = this.attributes.date.value;
        let price = this.attributes.price.value;
        let rate_count = this.attributes.rate_count.value;
        let content_id = this.attributes.content_id.value;
        let purchase_count = this.attributes.purchase_count.value;



        this.innerHTML = `
        <div class="featured-cont-wrap-x">
        <div class="featured-cont-right">
            <div class="featured-cont-details">
                <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
                <p class="fnt fnt-bold fnt-large">${description}</p><br>
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
                <button id="js-payhere-paynow-btn" class="btn btn-solid btn-large fnt-mid fnt-bold fnt">Buy Now</button>
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
                let res = await fetch(url, {method : "POST", credentials:"include", body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );



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





        document.querySelector('#js-payhere-paynow-btn').addEventListener('click', async (event)=>{
            event.preventDefault();

            if (getUserType() !=1 && getUserType() !=2 && getUserType() !=3){
                window.history.pushState({}, "", "/auth/signin" +
                    "");
                urlLocation();
            }
            let reqBody = {
                "content" :[
                    {"content_id": content_id}

                ]
            }

            let orderData = await fetch('http://localhost:8090/api/users/getOrderData/', {
                method : "POST",
                body : JSON.stringify(reqBody),
                credentials: "include"
            }).then((response)=>{
                return response.json();
            })


            if (orderData["isError"]){
                alert(orderData["errorMessage"])
            }
            else{
                alert("purchase successful")
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
                    "items": `${content_name}`,
                    "amount": `${orderData["amount"]}`,
                    "currency": `${orderData["currency"]}`,
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


            }





        })

    }
}

customElements.define('small-cardright', Item_buying_right);