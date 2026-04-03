import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    heading:{type:String,default:""},
    offerprice: { type: Number, required: true },
    description: { type: String, required: true },
    mrp:{ type: Number, required: true },
    WeightSize:{type:String,default:""},
    category: { type: String, required: true,
         enum:["GIFT-ITEMS","Mobiles","Watches", "Perfumes", "Clothes","Crockeries"] },
    Seller :{ type: String, required: true },
    images:{ type: [String], required: true }
});

export default mongoose.model("Product", productSchema);
