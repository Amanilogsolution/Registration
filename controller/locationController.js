import {Country,City,State} from '../model/locationModel.js'

export const createCountry = async (req,res) => {
    const {name,states} = req.body
    try{
    const country = new Country({ name,states });
    return country.save();
    }
    catch(err){
        res.status(500).send({
            success: false,
            message:"Error in Country",
            err
        })
    }
  };


 export const addStateToCountry = async (req,res) => {
  const {countryId} = req.params
  const {stateName} = req.body 
  // countryId, stateName
    const state = new State({ name: stateName });
    const country = await Country.findById(countryId);
    country.states.push(state);
    return country.save();
  };


 export const addCityToState = async (req,res) => {
  const {stateId} = req.params
  const {cityName} = req.body
    const city = new City({ name: cityName });
    const state = await State.findById(stateId);
    state.cities.push(city);
    return state.save();
  };


 export const getAllCountries = async (req,res) => {
  let Countries;
  Countries = await Country.find().exec();
    res.send(Countries) 
  };

  export const getStatesByCountry = async (req,res) => {
    const {countryId} = req.body;
    return Country.findById(countryId, 'states').exec();

    Countries = await Country.find().exec();
    res.send(Countries) 
  };

 export const getCitiesByState = async (stateId) => {
    return State.findById(stateId, 'cities').exec();
  };

  