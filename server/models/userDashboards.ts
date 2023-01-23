import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// set user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  nodeUID: {
    type: String,
  },

});

const UserDashboards = mongoose.model('UserDashboards', userSchema);

export default UserDashboards;