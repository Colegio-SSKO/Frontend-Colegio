

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/viewteacherprofile/:"+ getTeacherID();
    let res3 = await fetch(url, {method: "GET"}).then((response) =>
        response.json()
    );

    return res3;
};




async function renderSingle() {
    try {
        const data = await fetchData();
        const res2 = await fetch("http://localhost:8090/api/users/ViewCont_list", { method: "GET" }).then((response) => response.text());

        const html_left = `
                            <teacherprofile-card profile_img="${data.img_src}" name="${data.name}" quli="${data.quli}" gender="${data.gender}" user_id="${data.user_id}"></teacherprofile-card>`+ "Trending in Colegio"+ `<content-list dataString="${encodeURIComponent(res2)}"></content-list>`;

        document.querySelector(".cont-body-content").innerHTML = html_left;




        let teachers = document.querySelectorAll(".all_courses");

        for (let element of teachers) {
            element.addEventListener('click', async (event) => {

                let user_id = event.target.id;
                temporary_data= user_id;



            })

        }


        let teachers2 = document.querySelectorAll(".all_quizzes");


        for (let element of teachers2) {
            element.addEventListener('click', async (event) => {

                let user_id = event.target.id;
                temporary_data= user_id;


            })

        }

    } catch (error) {
        console.error(error);
    }
}



