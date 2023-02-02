

const findOne = async (entity, ...attributes) => {
    const apiBase = "/api/";
    let response = await fetch(api+entity).then((data)=>
        data.json()
    );


    let result = {};
    for (let i of attributes){
        result[i] = response[i];
    }
    return result;
}


const findOne = async (entity, ...attributes) => {
    const apiBase = "/api/";
    let response = await fetch(api+entity).then((data)=>
        data.json()
    );


    let result = {};
    for (let i of attributes){
        result[i] = response[i];
    }
    return result;
}

const components = {
    "cart-item" : {
        mainClass : "cart-item-content",
        title : "js-title",
        description : "js-description",
        author : "js-author",
        date : "js-date",
        time : "js-time",
        audience : "js-audience",
        price : "js-price"
    }
}


const  render = async (component, data, target) =>  {
        let comp = await fetch(`/components/${component}.jsp`).then((response)=>
        response.text()
    );
        for (let x of component[component]){
            comp
        }
        return comp;
}
const view =() => {

}