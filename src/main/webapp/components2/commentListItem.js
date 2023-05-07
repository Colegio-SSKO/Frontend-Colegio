class CommentListItem extends HTMLElement {
    connectedCallback() {

        let name = this.attributes.name.value;
        let pro_pic = this.attributes.pro_pic.value;
        let message = this.attributes.message.value;





        this.innerHTML = `
           <div class="comment-cmnt-1">
                   <img src="${pro_pic}" alt="">
                   <h5 class="fnt fnt-mid">${name}</h5><br>
                   <p class="fnt fnt-mid">${message}
                   </p>
           </div>
            
        `;
    }
}

customElements.define('comment-item', CommentListItem);