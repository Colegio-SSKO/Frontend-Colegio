class Teacher_card extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quali = this.attributes.quali.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        this.innerHTML = `
        <div class="teacher-card-wrap">
        <div class="teacher-card-image">
            <img src="${img_src}" alt="course image">
        </div>
           
       
        <div class="teacher-card-details">
            <h5 class="fnt fnt-extraBold fnt-mid">${name}</h5>
            <h5 class="fnt fnt-extraBold fnt-mid">${quali}</h5>
            <jsp:include page="ratings.jsp"/>
        </div>
        
    </div>
        `;
    }
}
    
customElements.define('teacher-card', Teacher_card);