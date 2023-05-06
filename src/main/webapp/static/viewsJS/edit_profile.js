async function fetchData(){

    let res = await fetch("http://localhost:8090/api/users/viewprofile/:"+getUserID(), {method : "GET", credentials : "include"}).then((response)=>
        response.json()

    );

    return res
};


async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <edit-profile img_src="${data["img_src"]}"></edit-profile>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;






    });
}



