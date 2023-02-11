
class Ratings extends HTMLElement {
    connectedCallback() {

        let rating = parseInt(this.attributes.rating.value);
        let votes = parseInt(this.attributes.votes.value);

        let html = "";
        let i,j;
        for(i=0; i<rating; i++){
            html += `<span class="material-icons">star</span>`;
        }

        for(j = 0; j<(5-i);j++){
            html += `<span class="material-icons" style="color: black;">star</span>`;
        }

        this.innerHTML = `
        <div class="cont-ratings">
        ${html}
        <span>(${votes})</span>

         </div>
        `;

    }
}

customElements.define('content-ratings', Ratings);