


async function fetchData(){

    let res = await fetch("http://localhost:8090/api/teachers/vieworganization/:"+getUserID(), {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.text()

    );
    return res
};
function renderSingle(){

    fetchData().then((data)=>{


        let html = `<pop-up></pop-up>
        
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

            })

        }




    });
}





