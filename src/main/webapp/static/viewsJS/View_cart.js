alert("View cartnew");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/viewcart/:" + getUserID();
    let res3 = await fetch(url, {method: "GET"}).then((response) =>
        response.text()
    );
    let data2 = JSON.parse(res3);
    return data2;
};




function renderSingle(){


    fetchData().then((data)=>{
        let total_price = 0;
        alert(typeof(data));
        for (let i of data){
            total_price += i.price;
        }

        let html_left = `<cart-price price= ${total_price}></cart-price>`;

        for (let i of data){
            html_left += ` <cart-item img_src="${i["img_src"]}" title="${i["title"]}" description="${i["description"]}" author="${i["author"]}" description2="${i["description2"]}" price="${i["price"]}" content_id="${i["content_id"]}"></cart-item>`;
        }
        html_left +=  `<div style="text-align: center"><button class="btn btn-solid btn-large fnt fnt-bold fnt-mid">Keep Shopping</button></div>`;
        document.querySelector(".cont-body-content").innerHTML = html_left;


        //remove cart
        let remove = document.querySelectorAll(".remove_cart");


        for (let element of remove){
            element.addEventListener('click',async (event)=>{

                let content_id = event.target.id;


                let requestBody= {
                    "content_id": content_id
                }
                let url = "http://localhost:8090/api/users/delete_cart/:" + getUserID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );
                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();
            })
        }

    });
}