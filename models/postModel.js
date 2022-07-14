import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  id: String,
  companyId: Number,
  title: String,
  author: String,
  briefContent: String,
  date: [Number],
  link: String,
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;