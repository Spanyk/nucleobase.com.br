const create = (req, res) => {
    const { name, username, email, senha, avatar, background }  = req.body

    if(!name || !username || !email || !senha || !avatar || !background) {
        res.status(400).send({ message: "Submit all  fields for registratinon" })
    }

    res.status(201).send({
        message: "User created sucessfuly",
        user: {
            name,
            username,
            email,
            avatar,
            background
        }
       
    })
}

module.exports = { create }