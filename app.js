const express = require('express');
const app= express();
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/freecodecamp')

app.listen(3000, () => {
    console.log('Server started hehe');
})