alert("hello edit");
alert("rrrrr");

async function fetchData(){
    return "eeew";
};


async function sendData(jsonRequest){
    await fetch("")
}


 function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <edit-profile></edit-profile>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        let fName = document.querySelector(".fname");
        let lName = document.querySelector(".lname");
        let edu = document.querySelector("#edu");
        let gender = document.querySelector("#gender");

        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', ()=>{
            let request = {
                "fName" : fName.value,
                "lName" : lName.value,
                "edu" : edu.value,
                "gender" : gender.value
            }




        })


    });
}