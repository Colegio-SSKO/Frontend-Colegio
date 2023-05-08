alert("mekata enne na")




async function fetchData() {


    const res2 = await fetch("http://localhost:8090/api/users/easy_nav_cards/:" + temporary_data, {
        method: "GET",
        credentials : "include"
    }).then((response) => response.json());
    return res2;
}


function renderSingle(){
    fetchData()
        .then((data) => {


            let html = "";
            html += `<easy-navresult dataString="${encodeURIComponent(data)}"></easy-navresult>`;
            document.querySelector(".cont-body-content").innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
