import Enquiry from '../models/clientModel.js';

// Create a new enquiry
export const createEnquiry = async (data) => {
  try {
    const newEnquiry = new Enquiry(data);
    await newEnquiry.save();
    return newEnquiry;
  } catch (error) {
    throw new Error('Error creating enquiry: ' + error.message);
  }
};

// Get all enquiries
export const getEnquiries = async () => {
  try {
    const enquiries = await Enquiry.find();
    return enquiries;
  } catch (error) {
    throw new Error('Error fetching enquiries: ' + error.message);
  }
};

// Accept or reject an enquiry
export const updateEnquiryStatus = async (enquiryId, status) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      enquiryId,
      { status },
      { new: true }
    );
    if (!enquiry) {
      throw new Error('Enquiry not found');
    }
    return enquiry;
  } catch (error) {
    throw new Error('Error updating enquiry status: ' + error.message);
  }
};
