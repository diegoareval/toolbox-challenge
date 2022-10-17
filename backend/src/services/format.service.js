const {formattedData} = require("../utils/format.utils");

class FormatService {
    convertToJson(dataFile, file){
        if (dataFile != null){
            let convertToJson = formattedData(dataFile); //Convert file csv to json
            if (convertToJson.length > 0){
                return {
                    file:file,
                    lines:convertToJson
                }
            } else return null
        }
    }
}

module.exports = new FormatService();
