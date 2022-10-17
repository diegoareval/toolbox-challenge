
/**
 * Create object with key/values
 * @param {Array} keys
 * @param {Array} values
 * @returns Object
 */
const generateObject = (keys,values) =>{
    return keys.reduce((o, k, i) => ({...o, [k]: values[i]}), {});
}


const splitData = (data, definition)=> {
    return data.split(definition);
}

/**
 * Convert file csv to json
 * @param {Array} data
 * @returns Array Objects
 */
function formattedData(data){
    //Initialization variable return
    let dataJson=[];

    let rows = splitData(data, '\n') //Separated by rows

    let columnsHeaders = splitData(rows[0], ',') //Separated by columns

    for (let i = 1; i <= rows.length-1; i++){

        let columnsFields = splitData(rows[i], ',') //Separated by fields
        //if columns equal fields, create object with key/values
        if (columnsHeaders.length === columnsFields.length ) {
            let obj = generateObject(columnsHeaders,columnsFields); //Create object with key/values
            dataJson.push(obj); //Add new element to dataJson for return
        }

    }

    return dataJson;

}

module.exports = {
    generateObject, formattedData
}
