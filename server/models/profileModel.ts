import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// set user schema
const profileSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
  },
  metricsArray: {
    type: Array,
  }
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;