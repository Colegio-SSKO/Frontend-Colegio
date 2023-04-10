alert("invite_teacher111222");

async function renderSingle() {
    try {
        const html_left = `<invite-teacher></invite-teacher>`;
        document.querySelector(".cont-body-content").innerHTML = html_left;

        // let search = document.querySelectorAll(".search");
        // let searchResults = null; // variable to store search results
        //
        // for (let element of search) {
        //     element.addEventListener('click', async (event) => {
        //         let teacher_name = document.getElementById("searchTeacher").value;
        //
        //         let requestBody = {
        //             "teacher_name": teacher_name
        //         }
        //         let url = "http://localhost:8090/api/users/search_teacher";
        //         let res3 = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)}).then((response) =>
        //             response.text()
        //         );
        //
        //         searchResults = res3; // store search results
        //
        //         let html = '<invite-teacher></invite-teacher>';
        //         html += `<search-resultlist dataString="${encodeURIComponent(searchResults)}"></search-resultlist>`;
        //         document.querySelector(".cont-body-content").innerHTML = html;
        //     })
        // }
    } catch (error) {
        console.error(error);
    }
}



