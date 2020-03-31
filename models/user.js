const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        gold: {
            type: Number,
            "default": 0
        },
        silver: {
            type: Number,
            "default": 0
        },
        bronze: {
            type: Number,
            "default": 0
        }
        
    },
    
    {
        timestamps: true
    }
)


userSchema.set('toJSON', {
    virtuals: true
})

module.exports = mongoose.model('User', userSchema)