alert("mekt enw oiii")


async function fetchData(){
    return [
        {
            "date" : "2020-02-02",
            "time" : "Now",
            "sender" : "Senith uthsara",
            "type" : 0
        }
    ];
};




function renderSingle(){


    fetchData().then((data)=>{

        let html_left = "";
        if (data.length==0){
            html_left = `0 Notifications`;
        }
        for (let i of data){
            html_left += `<br> 
                        <notification-message 
                            date="${i["date"]}"
                            time="${i["time"]}"
                            title="${i["title"]}"
                            sender="${i["sender"]}"
                            message="${i["message"]}"
                            id="${i["id"]}"
                        ><notification-message>            
                `

        }
        document.querySelector(".cont-body-content").innerHTML = `<div id="js-notification-list-ui"> ${html_left} </div>`;


    });
}