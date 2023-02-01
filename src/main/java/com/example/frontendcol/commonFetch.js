

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

