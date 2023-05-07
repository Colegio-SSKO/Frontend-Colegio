alert("edit1234565")


async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/organizations/viewprofile/:"+ getUserID();
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );

    return res3;
};



async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <edit-profileorg img_src="${data["img_src"]}"></edit-profileorg>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', async ()=>{
            // Retrieve values from input fields
            let fName = document.querySelector(".fname").value;
            let lName = document.querySelector(".lname").value;
            let address = document.querySelector(".address").value;
            let telnum = document.querySelector(".telnum").value;

            // Check if required fields are empty
            if (fName === '' || lName === '' || address === '' || telnum === '') {
                return;
            }

            if (telnum.length !== 10 || isNaN(telnum)) {
                // telnum is not a 10-digit number
                return;
            }

            // Create request object
            let req = {
                "fName" : fName,
                "lName" : lName,
                "address" : address,
                "telnum" : telnum
            }

            // Send data to server
            let resp = await fetch("http://localhost:8090/api/organizations/editProfile/:"+getUserID(), {
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
                    alert("ok eka wada");
                    document.querySelector(".popup-container").style.display = "none";
                })
            }
        })


    });
}



