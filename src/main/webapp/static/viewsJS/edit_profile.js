async function fetchData(){



    return "eeew";
};


async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <edit-profile></edit-profile>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");


        //sending data
        let fName = document.querySelector(".fname");
        let lName = document.querySelector(".lname");
        let edu = document.querySelector("#edu");
        let gender = document.querySelector("#gender");

        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', async ()=>{

            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "edu" : edu.value,
                "gender" : gender.value
            }
            let resp = await fetch("http://localhost:8090/api/users/editProfile/:1", {
                method : "POST",
                body : JSON.stringify(req),
                credentials : "include"
            })
                    .then((data)=>{
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



