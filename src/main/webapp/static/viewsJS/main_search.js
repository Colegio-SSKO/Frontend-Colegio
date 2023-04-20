let bbb = document.querySelector("#main_search_icon")
alert(bbb.value);

async function fetchData(){
    let requestBody = {
        "name": bbb.value
    }
alert("fdf")
//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/search_main";
    let res3 = await fetch(url, {method: "POST", body: JSON.stringify(req)}).then((response) =>
        response.text()
    );

    return res3;
    alert("fg")
};

alert("sd")
function renderSingle(){

    fetchData().then((data)=>{

        let html = "";

        html += `
        
        <seach-main-results> dataString="${encodeURIComponent(data)}"></seach-main-results>`;


        document.querySelector(".cont-body-content").innerHTML = html;


    });
}






