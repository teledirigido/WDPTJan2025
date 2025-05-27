const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String,
  author: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;