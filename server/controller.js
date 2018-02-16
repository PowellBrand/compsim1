module.exports = {
    shelf: (req, res) => {

        // second part of 74D-2
        updateBin: (req, res) => {
            const db = req.app.get('db');
            const { name, price } = req.body;
            db.update_bin([req.params.id[0], req.params.id[1], name, price]).then(inventory => {
                res.send(inventory[0])
            })
        }

    }
}