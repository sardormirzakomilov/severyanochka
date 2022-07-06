const {Schema , model} = require('mongoose')

const Card = new Schema({
    name:{
        type: String,
        required: true,
    },
    priceOne:{
        type: Number,
        required: true,
    },
    priceTwo:{
        type: Number,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    
})

module.exports = model("Card" , Card )