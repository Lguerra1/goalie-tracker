let goals = ['This is the first goal', 'this is the second goal']
let id = [0]

module.exports = {
    read: (req, res) => {
        res.status(200).send(goals)
    },

    create: (req, res) => {        
        goals.push(req.body.goal)
        res.status(200).send(goals)
    },

    delete: (req, res) => {
        let index = goals.findIndex(goal => goal.id == id)
        goals.splice(index, 1);
        res.status(200).send(goals)
    }

    
}