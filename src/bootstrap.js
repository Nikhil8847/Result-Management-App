module.exports = async () => {
    const Result = require("./models/Result")
    const errorHandler = (err) => {
        console.error("Error : ", err);
    }
    const result = await Result.create({}).catch(errorHandler)
}