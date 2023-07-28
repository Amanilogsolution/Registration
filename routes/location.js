import express from 'express';
import { addCityToState, addStateToCountry, createCountry, getAllCountries, getCitiesByState, getStatesByCountry } from '../controller/locationController.js';

const router = express.Router();

router.post('/createCountry',createCountry)
router.post('/:countryId/states',addStateToCountry)
router.post('/addCityToState',addCityToState)
router.post('/getAllCountries',getAllCountries)
router.post('/getStatesByCountry',getStatesByCountry)
router.post('/getCitiesByState',getCitiesByState)

export default router

