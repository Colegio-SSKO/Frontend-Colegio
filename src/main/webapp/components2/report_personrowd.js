class report_personrowd extends HTMLElement {
    connectedCallback() {
        let date = this.attributes.date.value;


        this.innerHTML = `
              <td class="fnt fnt-light fnt-mid">${date}</td>
    
                  
        `;


    }
}

customElements.define('report-personrowd', report_personrowd);