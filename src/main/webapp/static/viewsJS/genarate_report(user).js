alert("report_person13");

async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/generate_report_person/:" + temporary_data, {method : "GET"}).then((response)=>
        response.text()

    );
    return res

};
function renderSingle(){

    fetchData().then((data)=>{

        let html = `
        
        <reportperson-list dataString="${encodeURIComponent(data)}"></reportperson-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let disable = document.querySelectorAll(".disable_user");


        for (let element of disable){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;


                let requestBody= {
                    "user_id": user_id
                }
                let url = "http://localhost:8090/api/moderators/disable_person/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                window.history.back();
            })
        }


    });
}


