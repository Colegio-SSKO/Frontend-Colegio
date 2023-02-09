class Accepted extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let accept_person = this.attributes.accept_person.value;

        this.innerHTML = `
        <div class="accept_main">
      <div class="accept">
        <img src="${img_src}" alt="">
      </div>

      <div class="accept_person-details">
        <h3 class="fnt fnt-bold fnt-mid">Accepted by:- </h3>
        <div class="accept_person fnt fnt-mid">
              ${accept_person}
        </div>
      </div>

    <div class="accept-comment-box">
        <form action="submit">
            <input type="text" placeholder="Comment here...">
            <send-button/>
        </form>
    </div>


</div>
        `;
    }
}
    
customElements.define('question-accepted', Accepted);