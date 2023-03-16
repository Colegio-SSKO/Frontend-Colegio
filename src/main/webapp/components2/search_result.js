class search_result extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let teacher_id = this.attributes.teacher_id.value;

        this.innerHTML = `
            <div class="result-notification">
                <div class="result-prof-img">
                    <img src="${img_src}" alt="">
                </div>
                <div class="result-details">
                    <h3 class="fnt fnt-bold fnt-mid">${name}</h3>
                    <h3 class="fnt fnt-bold fnt-small">${quli}</h3>
                </div>

                <div style="text-align: right" class="send_request" id="${teacher_id}">
                    <button class="request-button">send</button>
                </div>

            </div>
        `;

        let send_request = document.querySelectorAll(".send_request");

        for (let element of send_request){
            let button = element.querySelector('.request-button');

            button.addEventListener('click',async (event)=>{
                let teacher_id = event.target.parentElement.id;

                let requestBody= {
                    "teacher_id": teacher_id
                }
                let url = "http://localhost:8090/api/users/org_send_request/:" + getOrgID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()
                );

                // Add the "disabled" attribute to the button after fetch call
                event.target.disabled = true;

                // Remove the event listener from the button
                button.removeEventListener('click', onClick);
            });

            // Check if the button has the "disabled" attribute when loading the search results

        }
    }
}

customElements.define('search-result', search_result);