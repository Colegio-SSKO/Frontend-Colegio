class OrganizationListteacher extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        alert(dataString);
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<organization-cardteacher img_src="${i["img_src"]}" name="${i["name"]}" address="${i["address"]}" organization_id="${i["organization_id"]}"></organization-cardteacher>
            `;
        }

        this.innerHTML = `
         <div class="teacher_list_view">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('organization-listteacher', OrganizationListteacher);