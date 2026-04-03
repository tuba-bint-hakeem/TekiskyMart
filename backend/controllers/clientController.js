import { createEnquiry, getEnquiries, updateEnquiryStatus } from '../services/clientService.js';

export const createEnquiryController = async (req, res) => {
  try {
    const enquiryData = req.body; // Assuming the enquiry data is passed in the request body
    const newEnquiry = await createEnquiry(enquiryData);
    res.status(201).json({ message: 'Enquiry created successfully', enquiry: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEnquiriesController = async (req, res) => {
  try {
    const enquiries = await getEnquiries();
    res.status(200).json({ enquiries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEnquiryStatusController = async (req, res) => {
  const { enquiryId, status } = req.params; // Assume the status is passed in the request params along with enquiryId
  try {
    const updatedEnquiry = await updateEnquiryStatus(enquiryId, status);
    res.status(200).json({ message: 'Enquiry status updated successfully', enquiry: updatedEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
