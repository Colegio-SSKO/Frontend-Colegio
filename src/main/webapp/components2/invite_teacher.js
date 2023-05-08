class invite_teacher extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <div class="inviteTeacher">
                    <div class="first">
                      <p class="fnt fnt-extraLarge fnt-bold">Invite Teacher</p><br>
                      <p class="fnt fnt-light fnt-large">Organizations bring in 100s of students to one place with a talented team of teachers pushing the boundaries of online education as a team.
                    </div>
        
                    <div class="box-container" style="text-align: left;">
                      <input type="text" placeholder="Search teachers" name="name" class="search2" id="searchTeacher">
                      <button class="search btn btn-solid fnt fnt-mid fnt-bold">search</button>
                    </div>
        
                    <img src="../static/img/components_images/inviteTeacher.jpg" width="510px" height="310px" class="main_img">
              </div>
        `;

        const searchButton = this.querySelector(".search");

        searchButton.addEventListener('click', async (event) => {
            let teacherName = this.querySelector("#searchTeacher").value;
            let url = "http://localhost:8090/api/organizations/search_teacher/:"+getUserID();
            let requestBody = {"teacher_name": teacherName};
            let response = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)});
            let searchResults = await response.text();

            alert(searchResults);

            const resultList = this.querySelector("search-resultlist");

            if (resultList) {
                resultList.remove();
            }
            if (searchResults === '[]') {
                alert("Not found");
            } else {
                const html = `<search-resultlist dataString="${encodeURIComponent(searchResults)}"></search-resultlist>`;
                this.insertAdjacentHTML("beforeend", html);
            }

        });
    }
}

customElements.define('invite-teacher', invite_teacher);