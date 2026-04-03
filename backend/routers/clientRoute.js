import express from 'express';
import { createEnquiryController, getEnquiriesController, updateEnquiryStatusController } from '../controllers/clientController.js';

const clientRoute = express.Router();

// Route to create a new enquiry
clientRoute.post('/enquiry', createEnquiryController);

// Route to get all enquiries
clientRoute.get('/getEnquiry', getEnquiriesController);

// Route to update the status of an enquiry (accept/reject)
clientRoute.put('/update/:enquiryId/:status', updateEnquiryStatusController);

export default clientRoute;

