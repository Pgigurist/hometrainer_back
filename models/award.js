const mongoose = require('mongoose')
const Schema = mongoose.Schema

const awardSchema = new Schema(
    {
        gold: Number,
    },
    {
        silver: Number,
    },
    {
        bronze: Number
    },
    {
        timestamps: true
    }
)


awardSchema.set('toJSON', {
    virtuals: true
})

module.exports = mongoose.model('Award', awardSchema)