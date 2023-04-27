class report_personrowr extends HTMLElement {
    connectedCallback() {
        let reason = this.attributes.reason.value;


        this.innerHTML = `
              <td class="fnt fnt-light fnt-mid">${reason}</td>
    
                  
        `;


    }
}

customElements.define('report-personrowr', report_personrowr);