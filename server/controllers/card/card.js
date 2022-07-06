const Card = require('../../models/Card')
const toDelete = require('../../middleware/toDelete')
exports.CardCreate = async (req, res) => {
    if (req.file) {
        const { name, priceOne, priceTwo, } = req.body

        const Cardd = new Card({
            name,
            priceOne,
            priceTwo,
            img: req.file.filename
        })
        await Cardd.save()
        res.status(201).json({ message: "Success" })
    }
    else {
        res.send("Error in create category")
    }
}

exports.CardUpdate = async (req, res) => {
    try {

        const { img } = await Card.findById(req.params.id)
        const update = {
            name: req.body.name,
            priceOne: req.body.priceOne,
            priceTwo: req.body.priceTwo,
            img: req.file.filename
        }
        await toDelete(img)

        await Card.findByIdAndUpdate(req.params.id, update, (err, data) => {
            if (err) return res.status(500).json({ message: "Error in update category" })
            else {
                return res.status(200).json({ message: "Success" })
            }
        })
    } catch (error) {
        console.log(error);
    }
}

