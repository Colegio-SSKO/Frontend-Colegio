alert("search ")
async function fetchData(){
    let bbb = temporary_data;
    alert("hello " + bbb)
    try {
        alert(bbb+ "hari");
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/search_main";
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(requestBody),
            credentials : "include"
        }).then((response)=>response.text());
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from server');
    }
}

function renderSingle(){
    fetchData()
        .then((data) => {


            let html = "";
            alert(data)
            html += `<search-mainresults dataString="${encodeURIComponent(data)}"></search-mainresults>`;
            document.querySelector(".cont-body-content").innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
