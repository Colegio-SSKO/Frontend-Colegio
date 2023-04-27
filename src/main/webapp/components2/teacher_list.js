class TeacherList extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        alert(dataString);
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<teacher-card img_src="${i["img_src"]}" name="${i["name"]}" quli="${i["quli"]}" user_id="${i["user_id"]}"}"></teacher-card>
            `;
        }

        this.innerHTML = `
         <div class="teacher_list_view">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('teacher-list', TeacherList);