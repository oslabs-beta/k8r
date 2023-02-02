import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// set user schema
const clusterSchema = new Schema({
  userId: {
    type: String,
  },
  clusterName: {
    type: String,
  },
  url: {
    type: String,
  },
  dashboards: {
    type: Object,
  }
});

const Cluster = mongoose.model('Cluster', clusterSchema);

export default Cluster;