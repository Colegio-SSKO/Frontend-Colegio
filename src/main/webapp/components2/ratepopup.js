class Ratepop_up extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
            
        <div class="popup-container">
            <div class="blur-background"></div>
            <div class="popup-content">
                <h4 class="fnt fnt-bold fnt-large">Add your Rates</h4>
                <div class="rate">
                    <input type="radio" id="star5" name="rates" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rates" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                </div>
            </div>
        </div>
            
        `;

        let rates = document.querySelectorAll(".rate");


        for (let element of rates){
            element.addEventListener('click',async (event)=>{

                let rateValue = event.target.value;


                let requestBody= {
                    "rate_value": rateValue,
                    "content_id": 20
                }
                let url = "http://localhost:8090/api/users/addrates/:" + getUserID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );
                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${res.message}</h2>
                        <button btn btn-primary><a href="/viewCourses">OK</a></button>

                `;
            })
        }
    }
}

customElements.define('ratepop-up', Ratepop_up);