
const {callFiles, formattedData} = require("../utils");

async function GetDataFiles(req, res){

    try {
        //Get list files
        const listFiles = await callFiles("/files").then( response => response);

        //Initialization variable return
        const files = [];

        for (let file of listFiles.files) {
            //Get file content
            const dataFile = await
                callFiles(`/file/${file}`)
                .then( response => response)
                .catch((err)=>{
                    //Return null if the file is wrong or does not found
                    if (err.response.status === 404 || err.response.status === 500 )
                        return null;

                    throw new Error(err);
                })

            //Add element to return variable
            if (dataFile != null){
                let convertToJson = formattedData(dataFile); //Convert file csv to json
                if (convertToJson.length > 0){
                    files.push({
                        file:file,
                        lines:convertToJson
                    });
                }
            }
        }

        res.status(200).json(files);

    } catch (error) {
        return res.status(500).json({
            "status": error.response.status,
            "code": error.code,
            "message": error.message
        })
    }

}


/**
 * Return list files
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
async function GetListFiles(req, res){

    try {
        //Get list files
        const listFiles = await callFiles("/files").then( response => response);
        res.status(200).json(listFiles);

    } catch (error) {
        return res.status(500).json({
            "status": error.response.status,
            "code": error.code,
            "message": error.message
        })
    }

}




module.exports={
    GetDataFiles, //Return the list files and content in format JSON
    GetListFiles, //Return the list files
}
