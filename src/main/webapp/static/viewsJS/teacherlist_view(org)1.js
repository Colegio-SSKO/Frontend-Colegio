alert("org_teachers(Org1)123");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/Vieworg_teacher/:"+ temporary_data;
    let res3 = await fetch(url, {method: "GET"}).then((response) =>
        response.text()
    );

    return res3;
};
function renderSingle(){

    fetchData().then((data)=>{

        let html = '<pop-up></pop-up> <button class="btn btn-outlined btn-large"><a class="fnt fnt-bold fnt-mid" href="/invite_teachers">Invite teachers>></a></button>';

        html += `
        
        <teacher-listorg dataString="${encodeURIComponent(data)}"></teacher-listorg>`;


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


        let remove = document.querySelectorAll(".remove_teacher");


        for (let element of remove){
            element.addEventListener('click',async (event)=>{

                let teacher_id = event.target.id;


                let requestBody= {
                    "teacher_id": teacher_id
                }
                let url = "http://localhost:8090/api/organizations/remove_teacher/:" + getOrgID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );


                let popup = document.querySelector(".popup-content");
                alert("helloo weeessa")
                alert(res.message);
                document.querySelector(".popup-container").style.display = "flex";

                alert(res.message);

                if(res.message==="Remove teacher successfully"){
                    popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button btn btn-primary><a href="/organization_Teachers">OK</a></button>

                `;
                }
                else {
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button btn btn-primary><a href="/organization_Teachers">OK</a></button>

                `;
                }

            })
        }

    });
}






