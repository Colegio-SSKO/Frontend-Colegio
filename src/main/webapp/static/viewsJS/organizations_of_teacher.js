alert("my_organizs2232222233s");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/teachers/viewmyorganization/:" + getUserID(), {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.text()

    );
    alert("hellowww" +res);
    return res
};
function renderSingle(){

    fetchData().then((data)=>{
        alert("metana weda my")
        alert(data)
        let html = `<pop-up></pop-up>
        
        <organization-2listteacher dataString="${encodeURIComponent(data)}"></organization-2listteacher>`;


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
            })

        }

    });
}






