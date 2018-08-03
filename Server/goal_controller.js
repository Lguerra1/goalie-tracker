let quotes = ['Hard work beats talent, when talent doesnt work hard', 'The harder I work, the luckier I get']


module.exports = {
    read: (req, res) => {
        res.status(200).send(quotes)
    },

    create: (req, res) => {        
        quotes.push(req.body.quote)
        res.status(200).send(quotes)
    }

    
}