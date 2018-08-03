let goals = ['Connect the front end to the back end']


module.exports = {
    read: (req, res) => {
        res.status(200).send(goals)
    },

    create: (req, res) => {        
        goals.push(req.body.goal)
        res.status(200).send(goals)
    },

    delete: (req, res) => {
        res.status(200).send(goals)
    }

    
}