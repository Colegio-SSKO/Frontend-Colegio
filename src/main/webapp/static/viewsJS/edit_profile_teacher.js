alert("edit12345655")


async function fetchData(){
    let url = "http://localhost:8090/api/teachers/viewprofile/:"+getUserID();
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );
    alert(res3);
    return res3;
};


async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <edit-profileteacher img_src="${data["img_src"]}"></edit-profileteacher>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");





        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', async ()=>{
            // Retrieve values from input fields
            let fName = document.querySelector(".fname").value;
            let lName = document.querySelector(".lname").value;
            let dob = document.querySelector(".dob").value;
            let gender = document.querySelector("#gender").value;

            // Check if required fields are empty
            if (fName === '' || lName === '' || dob === '') {
                return;
            }



            // Create request object
            let req = {
                "fName" : fName,
                "lName" : lName,
                "dob" : dob,
                "gender" : gender
            }

            // Send data to server
            let resp = await fetch("http://localhost:8090/api/teachers/editProfile/:"+getUserID(), {
                method : "POST",
                body : JSON.stringify(req),
                credentials : "include"
            }).then((data)=>{
                return data.json()
            });

            // Display success or error message
            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";
            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                    <img src="../static/img/components_images/sucsess.png" alt="">
                    <h2>${message}</h2>
                    <a href="/profile"><button class="btn is-a-route" id="ok-btn">OK</button></a>
                   
        `;
            }
            else {
                popup.innerHTML = `
                    <img src="../static/img/components_images/error.png" alt="">
                    <h2>${message}</h2>
                    <button class="btn is-a-route" id="ok-btn">OK</button>
                   
        `;
                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
            }
        })




    });
}



