
async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/handle_users", {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()
    );

    return res

};


function renderSingle(){


    fetchData().then((data)=>{
        let html_left =" ";

        for (let i of data){
            html_left += ` <reported-personcard img_src="${i["img_src"]}" email="${i["email"]}" name="${i["name"]}" user_id="${i["user_id"]}"></reported-personcard>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;


        let report_person = document.querySelectorAll(".genarate_report_person");


        for (let element of report_person){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;
                temporary_data= user_id;


                let requestBody = {
                    "user_id": user_id
                }
            })
        }

    });
}

