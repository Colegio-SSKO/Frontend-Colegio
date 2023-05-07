class CommentListItem extends HTMLElement {
    connectedCallback() {

        let name = this.attributes.name.value;
        let pro_pic = this.attributes.pro_pic.value;
        let message = this.attributes.message.value;
        let date = this.attributes.date.value;





        this.innerHTML = `
           <div class="comment-cmnt-1">
                   <img src="${pro_pic}" alt="">
                   <div class="cmnt-text">
                       <h5 class="fnt fnt-mid">${name} &nbsp&nbsp ${date}</h5>
                       <div>
                       <p class="fnt fnt-mid">${message}</p>
                        </div>
                   </div>

           </div>
            
        `;
    }
}

customElements.define('comment-item', CommentListItem);