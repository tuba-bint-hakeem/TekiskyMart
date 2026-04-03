import mongoose from 'mongoose';

const preOrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'pending' // pending, accepted, rejected
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PreOrder = mongoose.model('PreOrder', preOrderSchema);
export default PreOrder;

