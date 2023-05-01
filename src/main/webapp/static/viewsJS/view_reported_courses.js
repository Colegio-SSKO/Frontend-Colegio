alert("View reported courses");

async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/view_reported_courses", {
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
            html_left += ` <reported-coursecard img_src="${i["img_src"]}" title="${i["title"]}" name="${i["name"]}" subject="${i["subject"]}" course_id="${i["course_id"]}"></reported-coursecard>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;


        let report = document.querySelectorAll(".genarate_report");


        for (let element of report){
            element.addEventListener('click',async (event)=>{

                let course_id = event.target.id;
                temporary_data= course_id;


                let requestBody = {
                    "course_id": course_id
                }
            })
        }

    });
}

