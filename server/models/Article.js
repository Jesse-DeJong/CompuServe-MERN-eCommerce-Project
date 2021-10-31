const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    writtenDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;