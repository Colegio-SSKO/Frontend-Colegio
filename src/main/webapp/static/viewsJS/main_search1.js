alert("search main1")
async function fetchData(){
    let bbb = temporary_data;
    try {
        alert(bbb);
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/visitors/search_main";
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
