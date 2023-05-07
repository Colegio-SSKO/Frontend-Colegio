
class Small_listed extends HTMLElement {

    connectedCallback() {

        let content_id = this.attributes.content_id.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let author = this.attributes.author.value;
        let price = this.attributes.price.value;
        let rates = this.attributes.rates.value;


        this.innerHTML = `
        
        <div class="small-listed-cont-wrap${content_id} small-listed-cont-wrap"> 
            <div class="small-listed-cont-image">
                <img src="${img_src}" alt="course image">
            </div>
           
       
            <div class="small-listed-cont-details">
                <h5 class="small_listed fnt fnt-bold fnt-mid">${title}</h5>
                    <div class="small-listed-cont-author">
                        <h6 class="fnt fnt-bold fnt-mid">${author}</h6>
                        <div class="ratings" style="display: flex; align-items: center; justify-content: flex-end;">
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                          <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                          <h6 class="fnt fnt-light fnt-mid">Ratings(${rates})</h6>
                        </div><br>
                    </div>
            <h3 class="fnt fnt-bold fnt-large">LKR.${price}</h3>
            
            </div>
        </div>
      
        `;
        let small_lited = document.querySelector(`.small-listed-cont-wrap${content_id}`);


        small_lited.addEventListener('click',async (event)=> {
            event.preventDefault();
            alert("aaaa")
            temporary_data = content_id;
            alert("hihi"+temporary_data);
            window.history.pushState({}, "", "/small_cardopen");
            urlLocation();
        });

    }
}
customElements.define('small-listed', Small_listed);