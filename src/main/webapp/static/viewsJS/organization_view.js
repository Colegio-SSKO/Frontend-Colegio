alert("new_organization101");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/vieworganization", {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.text()

    );
    return res
};
function renderSingle(){

    fetchData().then((data)=>{


        let html = `
        
        <organization-list dataString="${encodeURIComponent(data)}"></organization-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let teachers = document.querySelectorAll(".teacher-card-wrap");

        for (let element of teachers) {
            element.addEventListener('click', async (event) => {

                let organization_id = event.target.id;
                temporary_data= organization_id;


                let requestBody = {
                    "organization_id": organization_id
                }

                alert(organization_id);
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






