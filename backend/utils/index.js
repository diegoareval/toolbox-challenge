const axios = require("axios");

const instance = axios.create({
    baseURL: "https://echo-serv.tbxnet.com/v1/secret/",
    headers: {
        'Authorization': 'Bearer aSuperSecretKey'
    }
});


/**
 * Call list files external api
 * @returns Object
 * @param(resource: string)
 */
const callFiles = (resource) => {
    try {
        return instance.get(resource).then( res => res.data);
    } catch (error) {
        throw new Error(error);
    }

}

/**
 * Create object with key/values
 * @param {Array} keys
 * @param {Array} values
 * @returns Object
 */
const generateObject = (keys,values) =>{
    let obj={};
    for(let i=1; i <= keys.length-1; i++){
        obj[keys[i]] = values[i];
    }
    return obj;
}

/**
 * Convert file csv to json
 * @param {Array} data
 * @returns Array Objects
 */
function formattedData(data){
    //Initialization variable return
    let dataJson=[];

    let rows = data.split('\n'); //Separated by rows

    let columnsHeaders = rows[0].split(','); //Separated by columns

    for (let i = 1; i <= rows.length-1; i++){

        let columnsFields = rows[i].split(','); //Separated by fields

        //if columns equal fields, create object with key/values
        if (columnsHeaders.length === columnsFields.length ) {
            let obj = generateObject(columnsHeaders,columnsFields); //Create object with key/values
            dataJson.push(obj); //Add new elemen to dataJson for return
        }

    }

    return dataJson;

}

module.exports = {
    instance, callFiles, generateObject, formattedData
}
