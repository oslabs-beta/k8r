import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// set user schema
const userSchema = new Schema({
  googleId: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "email already registered"],
  },
  displayName: {
    type: String,
  },
  profilePhoto: {
    type: String
  },
});

const User = mongoose.model('User', userSchema);

export default User;