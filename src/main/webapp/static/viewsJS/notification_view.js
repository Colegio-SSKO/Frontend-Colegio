alert("notification1234")
async function fetchData(){
    let bbb = document.querySelector("#main_search_icon").value;
    try {
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/read_notification/:"+getUserID();
        let response = await fetch(url, {
            method: "GET",
            credentials : "include"
        }).then((response)=> response.text());
        let data = JSON.parse(response);

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
                if(i["type"]==1) {
                    html += `<notification-message1 date="${i["date"]}" time="${i["time"]}" sender_name="${i["f_name"]} ${i["l_name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-message1>`
                }
                else if(i["type"]==3) {
                    html += `<notification-message3 date="${i["date"]}" time="${i["time"]}" sender_name="${i["f_name"]} ${i["l_name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-message3>`
                }
                else if(i["type"]==2 || i["type"]==4 || i["type"]==10 || i["type"]==9){
                    html += `<notification-0message date="${i["date"]}" time="${i["time"]}" sender_name="${i["f_name"]} ${i["l_name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-0message>`
                }
            }
            document.querySelector(".cont-body-content").innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
