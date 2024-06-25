export const errorHandler = (statusCode, message) => {
    const error = new Error(message);   //JS Constructor Generate Error For Error  
    error.statusCode = statusCode;
    return error;
}