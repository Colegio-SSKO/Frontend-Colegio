class TeacherList extends HTMLElement {
    connectedCallback() {


        let dataString = this.attributes.dataString.value;

        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<teacher-card img_src="${i["img_src"]}" name="${i["name"]}" quali="${i["quali"]}"></teacher-card>
            `;
        }

        this.innerHTML = `
         <div class="teacher_list">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('teacher-list', TeacherList);