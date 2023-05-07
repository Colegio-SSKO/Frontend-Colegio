alert("notification1")
async function fetchData(){
    let bbb = document.querySelector("#main_search_icon").value;
    try {
        let requestBody = {
            "name": bbb
        };
        //uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/read_notification"+getUserID();
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

            // data = [
            //     {
            //         "notification_id" : 1,
            //         "pro_pic" : "../static/img/teachers/senith.jpeg",
            //         "name": "Jenny madam",
            //         "date": "2020-02-10",
            //         "time": "now",
            //         "message": "meka tm message ek",
            //         "type": 1,
            //         "isQuestion": true,
            //         "isContent": false,
            //         "isUser": false,
            //         "question_id": 60,
            //         "user_id": "",
            //         "content_id": "",
            //     },
            //
            //     {
            //         "notification_id" : 2,
            //         "pro_pic" : "../static/img/teachers/senith.jpeg",
            //         "name": "Jenny madam",
            //         "date": "2020-02-10",
            //         "time": "now",
            //         "message": "meka tm message ek",
            //         "type": 2,
            //         "isQuestion": true,
            //         "isContent": false,
            //         "isUser": false,
            //         "question_id": 60,
            //         "user_id": "",
            //         "content_id": "",
            //     }
            //     ,
            //     {
            //         "notification_id" : 3,
            //         "pro_pic" : "../static/img/teachers/senith.jpeg",
            //         "name": "Jenny madam",
            //         "date": "2020-02-10",
            //         "time": "now",
            //         "message": "meka tm message ek",
            //         "type": 3,
            //         "isQuestion": true,
            //         "isContent": false,
            //         "isUser": false,
            //         "question_id": 60,
            //         "user_id": "",
            //         "content_id": "",
            //     }
            //     ,
            //     {
            //         "notification_id" : 4,
            //         "pro_pic" : "../static/img/teachers/senith.jpeg",
            //         "name": "Jenny madam",
            //         "date": "2020-02-10",
            //         "time": "now",
            //         "message": "meka tm message ek",
            //         "type": 4,
            //         "isQuestion": true,
            //         "isContent": false,
            //         "isUser": false,
            //         "question_id": 60,
            //         "user_id": "",
            //         "content_id": "",
            //     }
            //
            // ]
            //

            let html = `<h3 id="js-notification-test" class="fnt fnt-bold"> ${data.length} notifications <h3>`;




            for (let i of data ){
                if(i["type"]==1 || i["type"]==3 || i["type"]==5 || i["type"]==6) {
                    html += `<notification-message1 type="${i["type"]}" date="${i["date"]}" time="${i["time"]}" sender_name="${i["name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-message1>`
                }
                else if(i["type"]==2 || i["type"]==15 || i["type"]==4 || i["type"]==14 || i["type"]==7
                    || i["type"]==8 || i["type"]==9 || i["type"]==10 || i["type"]==11 || i["type"]==12
                    || i["type"]==13
                ) {
                    html += `<notification-0message type="${i["type"]}" date="${i["date"]}" time="${i["time"]}" sender_name="${i["f_name"]} ${i["l_name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-0message>`
                }
                // else if(i["type"]==2 || i["type"]==4 || i["type"]==10 || i["type"]==9){
                //     html += `<notification-0message date="${i["date"]}" time="${i["time"]}" sender_name="${i["f_name"]} ${i["l_name"]}" message="${i["message"]}" img_src="${i["pro_pic"]}" id="${i["user_id_sender"]}" notification_id="${i["notification_id"]}"> </notification-0message>`
                // }
            }

            alert("notifications thynw")
            document.querySelector(".cont-body-content").innerHTML = html;

            //remove this
            document.querySelector('#js-notification-test').addEventListener('click', (event)=>{
                event.preventDefault();
                alert("click una")
            })


        })
        .catch((error) => {
            console.error(error);
            // Handle error here
        });
}
