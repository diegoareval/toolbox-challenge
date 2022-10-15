const responseHandler = (res, statusCode, response = undefined) => {
    return res.status(statusCode).json(response);
}
module.exports = {responseHandler}
