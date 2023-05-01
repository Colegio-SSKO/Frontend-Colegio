alert("org_teachers");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/Vieworg_teacher/:"+ temporary_data;
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.text()
    );

    return res3;
};
function renderSingle(){

    fetchData().then((data)=>{

        alert(temporary_data);
        alert(data);
        let html = `
        
        <teacher-list dataString="${encodeURIComponent(data)}"></teacher-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;



        let teachers = document.querySelectorAll(".teacher_cont");

        for (let element of teachers) {
            element.addEventListener('click', async (event) => {

                let user_id = event.target.id;
                temporary_data= user_id;


                let requestBody = {
                    "user_id": user_id
                }

                alert(user_id);
                // let url = "http://localhost:8090/api/users/Vieworg_teacher";
                // let res3 = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)}).then((response) =>
                //     response.json()
                // );

                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();
            })

        }

    });
}






