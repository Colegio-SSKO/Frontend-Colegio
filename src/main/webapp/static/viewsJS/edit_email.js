alert("edit email");
// alert("rrrrr");

async function fetchData(){
    // return "eeew";
};



function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <edit-profile></edit-profile>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

    });
}