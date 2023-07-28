import mongoose from "mongoose"

// Schema for Cities
const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  
  // Schema for States
  const stateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cities: [citySchema], // Subdocument array for cities within the state
  });
  
  // Schema for Countries
  const countrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    states: [stateSchema], // Subdocument array for states within the country
  });

export  const City = mongoose.model('City', citySchema);
export const State = mongoose.model('State', stateSchema);
export const Country = mongoose.model('Country', countrySchema);

// module.exports = { City, State, Country };

  