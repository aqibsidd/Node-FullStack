const user = require('../model/user')

const createUser = async (req, res) => {
    try {
        let reqBody = req.body
        let docs = await user.create(reqBody)
        return res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
module.exports = {
    createUser
}