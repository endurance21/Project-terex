import mongoose from '../../connect.js'

const Schema = mongoose.Schema
const model = mongoose.model


const Notice = new Schema({
    title:{
        type:String,
        required:true
    }
    ,
    content:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
},({timestamps:true}))

export default model('Notice' ,Notice)