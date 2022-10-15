
const {formattedData} = require("../utils/format.utils");
const {responseHandler} = require("../utils/response.utils");
const fileService = require("../services/files.service")

async function GetFilesData(req, res){
    try {
        //Get list files
        const listFiles = await fileService.getFileInformation("/files");
        //Initialization variable return
        const files = [];
        for (let file of listFiles.files) {
            //Get file content
            const dataFile = await fileService.getFileInformation(`/file/${file}`)
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
        return responseHandler(res, 200, files)
    } catch (error) {
        return responseHandler(res, 500, {message: error.message})
    }

}

/**
 * Return list files
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
async function GetFileList(req, res){

    try {
        //Get list files
       const listFiles = await fileService.getFileInformation("/files");
        return responseHandler(res, 200, listFiles)

    } catch (error) {
        return responseHandler(res, 500, {message: error.message})
    }

}




module.exports={
    GetFilesData, //Return the list files and content in format JSON
    GetFileList, //Return the list files
}
