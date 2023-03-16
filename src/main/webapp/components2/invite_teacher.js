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
                      <button class="search">search</button>
                    </div>
        
                    <img src="../static/img/components_images/inviteTeacher.jpg" width="510px" height="310px" class="main_img">
              </div>
        `;

        const searchButton = this.querySelector(".search");

        searchButton.addEventListener('click', async (event) => {
            const teacherName = this.querySelector("#searchTeacher").value;
            const url = "http://localhost:8090/api/users/search_teacher";
            const requestBody = {"teacher_name": teacherName};
            const response = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)});
            const searchResults = await response.text();

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