const resSukses = (res, code, status, message, data = null) => {
    return res.status(code).json({status, message, data})
}

const resError = (res, code, status, message) => {
    return res.status(code).json({status, message})
}
module.exports = {resSukses, resError};