class report_personrow extends HTMLElement {
    connectedCallback() {
        let name = this.attributes.name.value;


        this.innerHTML = `
              <td class="fnt fnt-light fnt-mid">${name}</td>
    
                  
        `;


    }
}

customElements.define('report-personrow', report_personrow);