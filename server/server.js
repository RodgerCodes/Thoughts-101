const express = require('express');
const app = express();
const backend = require('./api/api');
const cors = require('cors');
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use('/api/backend', backend);


// database config
mongoose.connect('mongodb+srv://rodgerAdmin:aezakmi_365@cluster0-vwvvm.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }, ()=> {
    console.log('Successfully connected to database');
});


if(process.env.NODE_ENV == 'production'){
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req,res) =>res.sendFile(__dirname + '/public/index.html/'))
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})