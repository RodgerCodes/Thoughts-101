const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
    name:{
        type:String
    }
});

module.exports = mongoose.model('post', postSchema);