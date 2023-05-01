class Small_listed extends HTMLElement {
    connectedCallback() {

        let content_id = this.attributes.content_id.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let price = this.attributes.price.value;
        // let rating = this.attributes.rating.value;
        // let votes = this.attributes.votes.value;
        this.innerHTML = `
        
        <div class="small-listed-cont-wrap"> <div class="small-listed-cont-image">
        
            <img src="${img_src}" alt="course image">
        
        </div>
           
       
        <div class="small-listed-cont-details">
            <h5 class="small_listed fnt fnt-bold fnt-mid"><a id="${content_id}" href="/small_cardopen">${title}</a></h5>
                <div class="small-listed-cont-author">
                    <h6 class="fnt fnt-mid">${author}</h6>

     
                </div>


            <h3 class="fnt fnt-bold fnt-large">LKR.${price}</h3>
        </div>
    </div>
        `;
        let small_lited = document.querySelectorAll(".small_listed");

        for (let element of small_lited){
            element.addEventListener('click',async (event)=> {

                    let content_id = event.target.id;
                    alert("aiii")
                    temporary_data = content_id;
                    alert(temporary_data);
                }
            );
        }
    }
}
    
customElements.define('small-listed', Small_listed);