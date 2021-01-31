const { user } = require('../database/models');

const controller = {
    list: async(req, res) => {
        const users = await user.findAll()
        res.json(users);
    }
}

module.exports = controller ;