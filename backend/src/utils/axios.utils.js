const axios = require("axios");
const {fileEndpointBase, tokenFileEndpoint} = require("../config");

class AxiosInstance  {
    /**
     * Call list files external api
     * @constructor(baseURL: string, token: string)
     */
    constructor(baseURL, token){
       this.instance = axios.create({
           baseURL: baseURL,
           headers: {
               'Authorization': token
           }
    });
    }


    /**
     * Call list files external api
     * @returns Object
     * @param(resource: string)
     */
     callFiles(resource) {
        try {
            return this.instance.get(resource).then( res => res.data);
        } catch (error) {
            throw new Error(error);
        }

    }
}

module.exports = new AxiosInstance(fileEndpointBase, tokenFileEndpoint)
