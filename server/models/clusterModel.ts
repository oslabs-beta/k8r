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
    nodeExporterUId: { type: String },
    prometheusUId: { type: String },
    kubeletUId: { type: String },
    apiServerUId: { type: String },
  }
});

const Cluster = mongoose.model('Cluster', clusterSchema);

export default Cluster;