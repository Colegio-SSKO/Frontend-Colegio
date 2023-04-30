class Comment_container_list extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            alert("data enwa")
            htmlcontent += `<comment-container commenter="${i["f_name"]+" "+i["l_name"]}" img_src="${i["pro_pic"]}" text="${i["message"]}" date="${i["date"]}" user_id="${i["user_id"]}"></comment-container><br>
            `;
        }

        this.innerHTML = `
         <div class="content-list-wrap">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('comment-list', Comment_container_list);





