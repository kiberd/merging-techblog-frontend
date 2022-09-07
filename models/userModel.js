import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  bookmarks: [String]
});

const UserModel = models.User || model('User', userSchema);

export default UserModel;