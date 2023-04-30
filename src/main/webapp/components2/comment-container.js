class Comment_container extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let commenter = this.attributes.commenter.value;
        let date = this.attributes.date.value;
        let text = this.attributes.text.value;
        let user_id = this.attributes.user_id.value;


        this.innerHTML = `
         <div class="comment-container">
        <img class="comment-container-profile-pic" src="${img_src}" alt="Profile Picture">
        <div class="comment-container-comment-details">
          <h4 class="comment-container-commenter-name">
            <span class="comment-container-comment-date">${date}</span>
            ${commenter}
          </h4>
          <p class="comment-container-comment-text">${text}</p>
          <div class="comment-container-comment-actions">
            <a href="" id="${user_id}">report</a>
          </div>
        </div>
      </div>
        `;

    }
}

customElements.define('comment-container', Comment_container);