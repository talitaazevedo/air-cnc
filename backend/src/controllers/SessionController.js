// index  , show, store, destroy
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const {
            email
        } = req.body;
        // Primeiro a var recebe o metodo User que procura  um e-mail
        let user = await User.findOne({
            email
        });
        // se ele não achar o usuário ele vai criar, caso ele encontre não criará retornará com o mesmo ID,
        if (!user) {
            user = await User.create({
                email
            });
        }

        return res.json(user);
    }


};