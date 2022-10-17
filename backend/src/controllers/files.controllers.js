const {responseHandler} = require("../utils/response.utils");
const fileService = require("../services/files.service");
const formatService = require("../services/format.service");

async function GetFilesData(req, res){
    try {
        // Get list files
        const listFiles = await fileService.getFileInformation("/files");
        //Initialization variable return
        const files = [];
        for (let file of listFiles.files) {
            //Get file content
            const dataFile = await fileService.getFileInformation(`/file/${file}`)

            //Add element to return variable
                const fileList = formatService.convertToJson(dataFile, file);
                if(fileList){
                    files.push(fileList)
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
