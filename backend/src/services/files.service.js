const filesInstance = require("../utils/axios.utils");

class FileService {
    async getFileInformation(resource){
        return  filesInstance.callFiles(resource)
            .then( response => response)
            .catch((err)=>{
                //Return null if the file is wrong or does not found
                if (err.response.status === 404 || err.response.status === 500 )
                    return null;

                throw new Error(err);
            })
    }
}

module.exports = new FileService()
