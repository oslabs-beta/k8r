import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// set user schema
const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  dashboardUId: {
    type: Array,
  },

});

const UserDashboards = mongoose.model('UserDashboards', userSchema);

export default UserDashboards;