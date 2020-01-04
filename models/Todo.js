const mongoose = require('mongoose');
//Set up default mongoose connection
var Schema = mongoose.Schema;
//definisi skema collection to do untuk mongoose

const todoSchema = new Schema({
    kegiatan: {
        type: String,
    },
    status: {
        type: Boolean,
    },
});

const Todo = mongoose.model('Todo', todoSchema, "todos");

module.exports = Todo;