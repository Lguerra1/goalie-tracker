let goals = [1,2,3,4,5]
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
        let {id}=req.params
        console.log(id)
        console.log(goals)
        goals.splice  (id, 1);
        console.log(goals)

        res.status(200).send(goals)
    },

    update: (req, res) => {
        let newGoal = goals.map((val, i) => {
            if (i == req.params.id) {
                return req.body.goal
            } else {
                return val;
            }
        })
        goals = [...newGoal]
        res.status(200).send(goals)
    }
}





