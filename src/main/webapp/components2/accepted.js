class Accepted extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let accept_person = this.attributes.accept_person.value;
        let pro_pic = this.attributes.pro_pic.value;
        this.innerHTML = `
        <div class="comment-main">
            <div class="comment-about">

                <div class="comment-profile">
                    <div class="comment-author">
                        <img src="${img_src}" alt="">
                     </div>

                    <div class="comment-author-name">
                        <h3 class="fnt fnt-bold fnt-mid">Accepted by:- </h3>
                    <div class="accept_person">
                        ${accept_person}
                    </div>
                    </div>
                 </div>
        </div>


        <div class="comment-cmnt">
             <div class="comment-comment-box">
                <img src="${pro_pic}" alt="">
      <form action="submit">
        <input type="text" placeholder="Comment here...">
        <button type="submit"></button>
      </form>
    </div>
  </div>

</div>
        `;
    }
}
    
customElements.define('question-accepted', Accepted);