
async function fetchData(){
    let bbb = document.querySelector("#main_search_icon").value;
    try {
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/show_notifications/:2";
        let response = await fetch(url, {
            method: "GET",
            credentials : "include"
        }).then((response)=> response.text());
        let data = JSON.parse(response);
        // alert("sads")
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
            for (let i of data ){
                html += `<notification-message date="${i["date"]}" time="${i["time"]}" title="${i["title"]}"  sender="${i["sender_name"]}" message="${i["description"]}" id="${i["notification_id"]}"> </notification-message>`
            }
            document.querySelector(".cont-body-content").innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
