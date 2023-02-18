const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://ld17282:${process.env.MONGO_PW}@cluster0.rurdl.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'spaceXLaunchTracker',
  })
  .then(() => console.log('Launches connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'launches' collection
const launchSchema = new Schema({
  id: Number,
  launchViewDateMonth: String,
  launchViewDateDay: String,
  launchViewName: String,
  launchViewDate: String,
  launchViewProvider: String,
  launchViewVehicle: String,
  launchViewPad: String,
  launchViewResult: String,
  launchViewT0: String,
});

// creats a model for the 'launches' collection that will be part of the export
const Launch = mongoose.model('launches', launchSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Launch,
};
