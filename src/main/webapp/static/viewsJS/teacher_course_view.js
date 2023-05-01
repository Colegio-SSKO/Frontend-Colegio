alert("teacher_course");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/teacher_course/:"+ temporary_data;
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

        alert(data);
        let html = `
 
        <content-list dataString="${encodeURIComponent(data)}"></content-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        // let teachers = document.querySelectorAll(".org_name");
        //
        // for (let element of teachers) {
        //     element.addEventListener('click', async (event) => {
        //
        //         let organization_id = event.target.id;
        //         temporary_data= organization_id;
        //
        //
        //         let requestBody = {
        //             "organization_id": organization_id
        //         }
        //
        //         alert(organization_id);
        //         // let url = "http://localhost:8090/api/users/Vieworg_teacher";
        //         // let res3 = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)}).then((response) =>
        //         //     response.json()
        //         // );
        //
        //         // let location = window.location;
        //         // window.history.pushState({}, "", location);
        //         // urlLocation();
        //     })
        //
        // }

    });
}






