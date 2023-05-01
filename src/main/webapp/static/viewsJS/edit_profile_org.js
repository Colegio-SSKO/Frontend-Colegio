alert("edit1234")


async function fetchData(){



    return "eeew";
};


async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <edit-profileorg></edit-profileorg>`;


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
            let resp = await fetch("http://localhost:8090/api/users/editProfileOrg/:"+getUserID(), {
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
                <button class="btn is-a-route" id="ok-btn"><a href="/profile">OK</a></button>
                   
        `;
            }
            else {
                popup.innerHTML = `
                <img src="../static/img/components_images/error.png" alt="">
               <h2>${message}</h2>
               <a href="/profile"><button class="btn is-a-route" id="ok-btn">OK</button></a>
                   
        `;
            }
        })


    });
}



