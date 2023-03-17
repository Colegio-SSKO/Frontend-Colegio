alert("new_organization10");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/vieworganization", {method : "GET"}).then((response)=>
        response.text()

    );
    return res
};
function renderSingle(){

    fetchData().then((data)=>{


        let html = `
        
        <organization-listteacher dataString="${encodeURIComponent(data)}"></organization-listteacher>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let teachers = document.querySelectorAll(".org_name");

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


        let teacher_send_request = document.querySelectorAll(".teacher_send_request");


        for (let element of teacher_send_request){
            element.addEventListener('click',async (event)=>{

                let organization_id = event.target.id;


                let requestBody= {
                    "organization_id": organization_id
                }
                let url = "http://localhost:8090/api/teachers/teacher_send_req/:" + getTeacherID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                if(res.message==="You already send request"){
                    alert(res.message);
                }

                else{
                    if(res.message==="You already a teacher of this organization"){
                        alert(res.message);
                    }
                    else {
                        alert("send request successfully");
                        element.disabled= true;
                    }
                }
            })
        }

    });
}






