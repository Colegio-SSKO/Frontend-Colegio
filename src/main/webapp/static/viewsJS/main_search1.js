alert("search main")
async function fetchData(){
    let bbb = document.querySelector("#main_search_icon").value;
    try {
        alert(bbb);
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/search_main";
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(requestBody),
            credentials : "include"
        });
        let data = await response.text();
        alert(data)
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from server');
    }
}

function renderSingle(){
    fetchData()
        .then((data) => {


            let html = "";
            html += `<search-mainresults dataString="${encodeURIComponent(data)}"></search-mainresults>`;
            document.querySelector(".cont-body-content").innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
