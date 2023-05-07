alert("dfdf3")
async function fetchData(){


    alert(temporary_data);

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/vieworganizationprofile/:"+temporary_data;
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );

    alert(JSON.stringify(res3));

    return res3;
};


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <adpublish-form organization_id="${data["organization_id"]}"></adpublish-form>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".account-upgrade-container");


        //sending data
        let fName = document.querySelector(".fname");
        let lName = document.querySelector(".lname");
        let edu_level = document.querySelector(".edu_level");
        let quli_certificates = document.querySelector(".quli_certificates");
        let references = document.querySelector(".refer");

        let submit_btn = document.querySelector("#submit_btn");

        submit_btn.addEventListener('click', async ()=>{

            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "edu" : edu_level.value,
                "quli" : quli_certificates.value,
                "refer" : references.value
            }
            let resp = await fetch("http://localhost:8090/api/users/upgrade_to_teacher/:1", {
                method : "POST",
                body : JSON.stringify(req),
                credentials : "include"
            }).then((data)=>{
                return data.json()
            });
            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";

            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
                `;
            }
            else {
                popup.innerHTML = `
                     <img src="../static/img/components_images/error.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
                `;
            }

            let ok_btn = document.getElementById("ok-btn");
            ok_btn.addEventListener("click", ()=>{
                document.querySelector(".popup-container").style.display = "none";
            })
        })




    });
}



